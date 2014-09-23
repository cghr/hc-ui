angular.module('appService', ['toaster'])
    .factory('AppService', function AppService($http, toaster, $location) {

        AppService.memberDetails = {}
        AppService.memberImage = {}
        AppService.householdDetails = {}
        AppService.deathInf = {}
        AppService.hospInf = {}
        AppService.data = {member: {}, memberImage: {}, household: {}, deathInf: {}, hospInf: {}}

        AppService.cleanup = function () {


            return $http.get('api/data/cleanup')

                .success(function () {
                    toaster.pop('success', '', 'Cleaned up Successfully')
                })
                .error(function () {
                    toaster.pop('error', '', 'Failed to cleanup')
                })
        }
        AppService.getData = function (entity, entityId) {


            return $http.get('api/data/dataAccessService/' + entity + '/' + entityId)
                .success(function (resp) {
                    AppService.data[entity] = resp
                })
                .error(function () {
                    toaster.pop('error', '', 'Failed to get data')
                })

        }

        AppService.getMemberDetails = function (memberId) {

            return $http.get('api/data/dataAccessService/member/memberId/' + memberId)
                .success(function (resp) {
                    AppService.memberDetails = resp
                })
                .error(function () {
                    toaster.pop('error', '', 'Failed to get MemberDetails')
                })
        }
        AppService.getHouseholdDetails = function (householdId) {

            return $http.get('api/data/dataAccessService/household/' + householdId)
                .success(function (resp) {
                    AppService.householdDetails = resp
                })
                .error(function () {
                    toaster.pop('error', '', 'Failed to get MemberDetails')
                })
        }
        AppService.getMemberImage = function (memberId) {

            return $http.get('api/data/dataAccessService/memberImage/memberId/' + memberId)
                .success(function (resp) {
                    AppService.memberImage = resp
                })
                .error(function () {
                    toaster.pop('error', '', 'Failed to get MemberImageDetails')
                })

        }


        return AppService

    })
