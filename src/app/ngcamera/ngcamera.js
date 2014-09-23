angular.module('ngcamera', ['ui.bootstrap','omr.directives','toaster'])
    .config(function ($stateProvider) {

        $stateProvider.state('cam', {
            url: '/hc/area/:areaId/house/:houseId/household/:householdId/member/:memberId/cam/:category/:imgSuffix',
            templateUrl: 'ngcamera/ngcamera.html'
        });
    })
    .controller('camCtrl', function ($scope, $stateParams, toaster) {


        $scope.ok = function () {
            $scope.$close();
        };

        $scope.cancel = function () {
            $scope.$close();
        };

        $scope.$watch('media', function (media) {
            var file = dataURLtoBlob(media);
            // Create new form data

            var fd = new FormData();
            fd.append("data", '{"' + $stateParams.imgSuffix + '":"' + $stateParams.memberId + '_' + $stateParams.imgSuffix + '","filestore":"memberImage","category":' + $stateParams.category + ',"filename":' + $stateParams.memberId + '_' + $stateParams.imgSuffix + ',"memberId":' + '"' + $stateParams.memberId + '"    ' + '}');

            // Append our image
            fd.append("file", file);

            $.ajax({
                url: 'api/file/fileStoreService',
                type: "POST",
                data: fd,
                processData: false,
                contentType: false
            }).done(function (response) {

                    toaster.pop('success','','Captured Successfully')
                    //$state.go('hc.memberDetail.cam', $stateParams);

                });
        });
        function dataURLtoBlob(dataURL) {
            // Decode the dataURL
            var binary = atob(dataURL.split(',')[1]);
            // Create 8-bit unsigned array
            var array = [];
            for (var i = 0; i < binary.length; i++) {
                array.push(binary.charCodeAt(i));
            }
            // Return our Blob object
            return new Blob([new Uint8Array(array)], {
                type: 'image/png'
            });
        }

    });