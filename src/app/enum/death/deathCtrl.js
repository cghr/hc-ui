angular.module('death', ['cgGrid', 'ui.router', 'appService'])
    .controller('DeathCtrl', function ($scope, $state, $rootScope, GridFactory, AppService, $stateParams) {

        $scope.canAddMore = true

        GridFactory.getData().then(function () {
            var actualCount = (GridFactory.data).data.rows.length
            AppService.getData('deathInf', $stateParams.householdId)
                .then(function () {
                    $scope.canAddMore = (actualCount < AppService.data.deathInf.deathCount)
                })
        });


    })