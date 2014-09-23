angular.module('myApp')
    .controller('AppCtrl', function ($window, AppService, $state, $stateParams, _, $rootScope) {

        this.cleanup = function () {

            var confirm = $window.confirm("Are you sure to cleanup ?")
            if (confirm)
                AppService.cleanup()
        }

    })
    .controller('PhotoCaptureCtrl', function ($scope, $modal, $stateParams, AppService) {

        var vm = $scope
        vm.memberImage = {}

        function updateCaptureStatus() {

            AppService.getMemberImage($stateParams.memberId)
                .then(function () {

                    vm.memberImage = AppService.memberImage
                })

        }

        updateCaptureStatus()

        vm.open = function (category) {

            $stateParams.imgSuffix = category
            $stateParams.category = category == 'consent' ? 'memberConsent' : 'memberPhoto'


            var modalInstance = $modal.open({
                templateUrl: 'ngcamera/ngcamera.html',
                controller: 'camCtrl',
                size: 'lg'

            });
            modalInstance.result
                .then(function () {
                    updateCaptureStatus()
                }, function () {

                })

        }


    })
