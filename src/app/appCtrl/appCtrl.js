angular.module('myApp')
    .controller('AppCtrl', function ($window, AppService, $state, $stateParams, _, $rootScope) {

        this.cleanup = function () {

            var confirm = $window.confirm("Are you sure to cleanup ?")
            if (confirm)
                AppService.cleanup()
        };


    })
