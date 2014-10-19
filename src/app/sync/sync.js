angular.module('sync', [ 'ui.bootstrap', 'toaster', 'progressService'])
    .config(function ($stateProvider) {

        $stateProvider
            .state('sync', {
                url: '/sync',
                templateUrl: 'sync/sync.html'
            });
    })
    .controller('syncCtrl', function ($scope, ProgressService, $interval, toaster, $timeout) {

        $scope.total = {}
        $scope.pending = {}
        $scope.progress = {}


        this.startSync = function () {
            ProgressService.startSync()
                .then(syncSuccess);
        }

        function syncSuccess() {
            $timeout.cancel($scope.progressUpdater)
        }

        $scope.progressUpdater = $interval(function () {
            updateProgress()
        }, 1500)

        function updateProgress() {
            updateStatusOf('download')
            updateStatusOf('upload')
            updateStatusOf('fileupload')
        }

        function updateStatusOf(statusType) {

            ProgressService.getStatus(statusType)
                .then(function () {
                    !$scope.total[statusType] ? updateTotalFor(statusType) : updateProgressFor(statusType)
                })
        }

        function updateTotalFor(statusType) {
            $scope.total[statusType] = ProgressService.status[statusType]
        }

        function updateProgressFor(statusType) {
            $scope.pending[statusType] = ($scope.total[statusType]) - (ProgressService.status[statusType])
            $scope.progress[statusType] = (($scope.total[statusType]) - $scope.pending[statusType]) / 100
        }


    })

