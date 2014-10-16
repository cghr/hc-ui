angular.module('appService', ['toaster'])
    .factory('AppService', function AppService($http, toaster, $location) {

        AppService.data = {member: {}, memberImage: {}, household: {}, deathInf: {}, hospInf: {}}

        AppService.cleanup = function () {

            return $http.get('api/data/cleanup')
                .success(function () {
                    toaster.pop('success', '', 'Cleaned up Successfully')
                })
                .error(errorCallback)
        }

        AppService.getData = function (entity, entityId) {

            return $http.get('api/data/dataAccessService/' + entity + '/' + entityId)
                .success(function (resp) {
                    AppService.data[entity] = resp
                })
                .error(errorCallback)

        }

        function errorCallback() {
            toaster.pop('error', '', 'Failed to fetch data')
        }


        return AppService

    })
