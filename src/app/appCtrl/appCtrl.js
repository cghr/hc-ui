angular.module('myApp')
    .controller('AppCtrl', function ($window, AppService, $state, $stateParams, _, $rootScope) {


        this.cleanup = function () {

            var confirm = $window.confirm("Are you sure to cleanup ?")
            if (confirm)
                AppService.cleanup()
        }

        this.handleNavigation = function (data) {

            var navigationRules = [
                {"state": "hc.memberDetail.pmh", fnc: pmh, success: 'hc.memberDetail.mood', fail: 'hc.memberDetail.rh'},
                {"state": 'enum.householdDetail.hospInf', fnc: hospInf, success: 'enum.householdDetail.hosp', fail: 'enum.householdDetail.deathInf'},
                {"state": 'enum.householdDetail.deathInf', fnc: deathInf, success: 'enum.householdDetail.death', fail: 'enum.householdDetail.contact'},
                {"state": "hc.memberDetail.ta", fnc: tobaccoAlcohol, success: 'hc.memberDetail.alcoholFreq', fail: 'hc.memberDetail.alcohol2'},
                {"state": "enum.visitDetail.basicInf", fnc: enumVisit, success: 'enum.householdDetail.basicInf', fail: 'enum.houseDetail.household'},
                {"state": "hc.visitDetail.basicInf", fnc: hcVisit, success: 'hc.householdDetail.member', fail: 'hc.houseDetail.household'}
            ];

            var stateHandler = _.find(navigationRules, {state: $state.current.name})
            var evalFunction = stateHandler.fnc(data)

            if (evalFunction.then) {

                evalFunction.then(function (isConditionPassing) {
                    var nextState = isConditionPassing ? stateHandler.success : stateHandler.fail
                    $state.go(nextState, $rootScope.$stateParams)
                })
            }
            else {
                var nextState = evalFunction ? stateHandler.success : stateHandler.fail
                $state.go(nextState, $rootScope.$stateParams)

            }

            function enumVisit(data) {

                return (data.hhAvailability == 'Respondents Available')
            }

            function hcVisit(data) {

                return (data.hhVisit == 'Available')
            }


            function tobaccoAlcohol(data) {
                return  (data.consumeAlcohol == 'Yes')

            }

            function pmh(data) {

                return AppService.getMemberDetails($stateParams.memberId)
                    .then(function () {
                        var member = AppService.memberDetails
                        return (member.gender == 'Male')
                    });


            }

            function hospInf(data) {
                $rootScope.hosp = data
                return (data.hospStatus == 'Yes')
            }

            function deathInf(data) {
                $rootScope.death = data
                return  (data.deathStatus == 'Yes')
            }


        }


    })
