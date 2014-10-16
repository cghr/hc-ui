angular.module('dataGridCustom', ['cgGrid', 'ui.router', 'appService', 'lodash'])
    .controller('DataGridCustomCtrl', function ($scope, $state, $rootScope, GridFactory, AppService, $stateParams, _) {

        $scope.canAddMore = true
        var mappings = {
            'member': {entity: 'household', obj: 'household', variable: 'totalMembers', next: 'enum.householdDetail.commonQs'},
            'hosp': {entity: 'hospInf', obj: 'hospInf', variable: 'hospCount', next: 'enum.householdDetail.deathInf'},
            'death': {entity: 'deathInf', obj: 'deathInf', variable: 'deathCount', next: 'enum.householdDetail.contact'}
        }


        GridFactory.getData().then(function () {
            var actualCount = (GridFactory.data).data.rows.length
            var stateName = ($state.current.name).split('.')
            var mapping = mappings[_.last(stateName)]
            $scope.nextState = mapping.next

            AppService.getData(mapping.entity, $stateParams.householdId)
                .then(function () {
                    $scope.canAddMore = (actualCount < AppService.data[mapping.obj][mapping.variable])
                })
        });


    })