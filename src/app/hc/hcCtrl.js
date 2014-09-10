angular.module('hc')
    .controller('hcCtrl', function ($scope, GridFactory, $rootScope, $state, $stateParams, StateTransitions, IDService) {

        $scope.addNew = function () {

            IDService.getNextID()
                .then(function () {
                    transitionState($state.current.name, IDService.nextID)
                }, function () {
                    transitionState($state.current.name, undefined)
                })

            function transitionState(currentState, nextID) {

                var stateObject = StateTransitions[currentState]
                if (nextID)
                    $rootScope.$stateParams[stateObject.param] = nextID

                $state.go(stateObject.to, $rootScope.$stateParams)

            }
        };



    })


