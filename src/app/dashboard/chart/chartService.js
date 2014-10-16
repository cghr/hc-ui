angular.module('chartService', [])
    .service('ChartService', function ChartService($http, $log) {

        ChartService.data = {totalProgress: [], pendingDownloads: []}


        this.getPendingDownloads = function () {

            return getData('api/chart/pendingDownloads', 'pendingDownloads')
        }

        this.getTotalProgress = function () {

            return getData('api/chart/totalProgress', 'totalProgress')

        }
        function getData(url, objProperty) {

            return $http.get(url)
                .success(function (data) {
                    ChartService.data[objProperty] = data
                }).error(fail)
        }


        function fail() {
            $log.error('Failed to load chart data')
        }


    });
