angular.module('hosp', ['cgGrid', 'ui.router', 'appService'])
    .controller('HospCtrl', function ($scope, $state, $rootScope, GridFactory, AppService, $stateParams) {

        $scope.canAddMore = true

        GridFactory.getData().then(function () {
            var actualCount = (GridFactory.data).data.rows.length
            AppService.getData('hospInf', $stateParams.householdId)
                .then(function () {
                    $scope.canAddMore = (actualCount < AppService.data.hospInf.hospCount)
                })
        });


    })