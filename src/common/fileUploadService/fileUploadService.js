angular.module('fileUploadService', ['toaster'])
    .service('FileUploadService', function ($http, toaster) {

        var url = "api/file/fileStoreService";
        var config = {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined} };

        this.upload = function (formData) {

            $http.post(url, formData, config)
                .success(function () {
                    toaster.pop("success", "", "Captured Successfully")
                })
                .error(function () {
                    toaster.pop("error", "", "Error while uploading photo")
                });
        };

    })
