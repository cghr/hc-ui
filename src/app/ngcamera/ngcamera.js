angular.module('ngcamera', ['ui.bootstrap', 'omr.directives', 'toaster', 'dataUrltoBlob', 'fileUploadService'])
    .config(function ($stateProvider) {

        $stateProvider.state('cam', {
            url: '/hc/area/:areaId/house/:houseId/household/:householdId/member/:memberId/cam/:category/:imgSuffix',
            templateUrl: 'ngcamera/ngcamera.html'
        });
    })
    .controller('camCtrl', function ($scope, $stateParams, toaster, $http, DataUrlToBlob, FileUploadService) {


        $scope.ok = closeDialog
        $scope.cancel = closeDialog
        
        $scope.$watch('media', function (media) {

            var file = DataUrlToBlob.convert(media);
            var fd = new FormData();
            fd.append("data", '{"' + $stateParams.imgSuffix + '":"' + $stateParams.memberId + '_' + $stateParams.imgSuffix + '","filestore":"memberImage","category":' + $stateParams.category + ',"filename":' + $stateParams.memberId + '_' + $stateParams.imgSuffix + ',"memberId":' + '"' + $stateParams.memberId + '"    ' + '}');
            fd.append("file", file);

            FileUploadService.upload(fd);


        });
        function closeDialog() {
            $scope.$close();
        }

    });