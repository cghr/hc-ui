angular.module('photoConsent', [])
    .controller('PhotoConsentCtrl', function ($scope, $modal, $stateParams, AppService) {

        var vm = $scope
        vm.memberImage = {}

        updateCaptureStatus()


        vm.open = function (category) {

            $stateParams.imgSuffix = category
            $stateParams.category = category == 'consent' ? 'memberConsent' : (category == 'photo') ? 'memberPhoto' : 'memberPhotoConsent'

            var modalInstance = $modal.open({
                templateUrl: 'ngcamera/ngcamera.html',
                controller: 'camCtrl',
                size: 'lg'

            });
            modalInstance.result
                .then(function () {
                    updateCaptureStatus()
                })

        };
        function updateCaptureStatus() {

            AppService.getData('memberImage', $stateParams.memberId)
                .then(function () {
                    vm.memberImage = AppService.data.memberImage
                })
        }


    })
