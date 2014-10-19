angular.module('schemaLoader', ['lodash', 'toaster'])
    .factory('SchemaLoader', function SchemaLoader(_, $http, $q, $log, toaster) {


        SchemaLoader.allSchemas = []

        SchemaLoader.loadAllSchemas = function (schemaNames, schemaPath) {

            var currentLoaded = 0
            var promises = _.map(schemaNames, function (schema) {
                return $http.get(schemaPath + schema)
            })


            return $q.all(promises)
                .then(function (responses) {
                    _.each(responses, function (response, index) {
                        SchemaLoader.allSchemas.push(response.data)
                    })

                }, function () {

                    toaster.pop('error', '', 'Failed to load Json schemas')
                })
        }
        return SchemaLoader

    })