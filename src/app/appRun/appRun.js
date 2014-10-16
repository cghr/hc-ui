angular.module('myApp')
    .run(function ($rootScope, $state, $stateParams, SchemaFactory, _, SchemaLoader, toaster, JsonSchemaListService) {

        $rootScope.$state = $state
        $rootScope.$stateParams = $stateParams


        $rootScope.$on("$stateChangeSuccess", function (event, next, current) {

            if ($rootScope.$state.current.msg)
                toaster.pop('info', '', $rootScope.$state.current.msg)

        });

        $rootScope.$on("$stateChangeStart", function (event, next, current) {

            if ($rootScope.$state.current.stateChangeStartMsg)
                toaster.pop('info', '', $rootScope.$state.current.stateChangeStartMsg)

        });

        JsonSchemaListService.getSchemaList()
            .then(function () {
                var states = JsonSchemaListService.schemaList
                SchemaLoader
                    .loadAllSchemas(states, 'assets/jsonSchema/')
                    .then(function () {
                        _.each(SchemaLoader.allSchemas, function (schema, index) {
                            SchemaFactory.put(states[index].replace(".json", ""), schema)
                        })
                    })
            })


    })
