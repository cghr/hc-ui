angular.module('progressService', ['toaster'])
    .service('ProgressService', function ProgressService($log, $http, toaster) {

        ProgressService.status = {download: 0, upload: 0, fileupload: 0};


        this.startSync = function () {

            return $http.get('api/sync/dataSync')
                .success(syncSuccess)
                .error(syncFail)
        }
        function syncSuccess() {
            toaster.pop('success', '', 'Sync Completed');
        }

        function syncFail() {
            toaster.pop('error', '', 'Failed to Sync.Try Again');
        }

        this.getStatus = function (statusType) {

            return $http.get('api/sync/status/' + statusType)
                .success(function (data) {
                    ProgressService.status[statusType] = data
                })
                .error(fail)
        }

        function fail() {
            $log.error('Failed to get Progress Status')
        }


    })
