angular.module('dashboard', ['ui.router', 'angularCharts', 'lodash', 'chartService'])
    .config(function ($stateProvider) {

        $stateProvider.state('dashboard', {
            url: '/dashboard',
            templateUrl: 'dashboard/dashboard.html',
            controller: 'dashboardCtrl',
            controllerAs: 'dashboard'
        })

    })
    .controller('dashboardCtrl', function (ChartService, $interval) {

        var vm = this
        vm.chartType = 'bar'

        vm.pendingDownloadsConfig = getChartConfig('Pending Downloads')
        vm.totalProgressConfig = getChartConfig('Total Progress')

        updateDashboard()

        $interval(function () {
            updateDashboard()
        }, 2000)

        function updateDashboard() {

            ChartService.getPendingDownloads()
                .then(function () {
                    if (!isEqualTo(vm.pendingDownloads, ChartService.data.pendingDownloads))
                        vm.pendingDownloads = ChartService.data.pendingDownloads
                });
            ChartService.getTotalProgress()
                .then(function () {
                    if (!isEqualTo(vm.totalProgress, ChartService.data.totalProgress))
                        vm.totalProgress = ChartService.data.totalProgress
                });
        }

        function getChartConfig(title) {

            return { "labels": false, "title": title,
                "legend": { "display": true, "position": "right" },
                "innerRadius": 0,
                "lineLegend": "lineEnd"
            };
        }

        function isEqualTo(obj1, obj2) {

            return JSON.stringify(obj1) == JSON.stringify(obj2)
        }


    })
