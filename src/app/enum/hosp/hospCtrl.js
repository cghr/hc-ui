angular.module('hosp', ['cgGrid', 'ui.router'])
    .controller('HospCtrl', function ($scope, $state, $rootScope, GridFactory) {

        $scope.canAddMore = true

        GridFactory.getData().then(function () {
            var actualCount = (GridFactory.data).data.rows.length
            $scope.canAddMore = (actualCount != $rootScope.hosp.hospCount)
        });


    })