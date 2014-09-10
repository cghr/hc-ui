angular.module('appService', ['toaster'])
    .factory('AppService', function AppService($http, toaster, $location) {

        AppService.memberDetails = {}

        AppService.cleanup = function () {


            return $http.get('api/data/cleanup')

                .success(function () {
                    toaster.pop('success', '', 'Cleaned up Successfully')
                })
                .error(function () {
                    toaster.pop('error', '', 'Failed to cleanup')
                })
        }

        AppService.getMemberDetails = function (memberId) {

            return $http.get('api//data/dataAccessService/member/memberId/' + memberId)
                .success(function (resp) {
                    AppService.memberDetails = resp
                })
                .error(function () {
                    toaster.pop('error', '', 'Failed to get MemberDetails')
                })
        }


        return AppService

    })
