angular.module("myApp", [
        'schemaLoader',
        'jsonSchemaListService',
        'lodash',
        'chieffancypants.loadingBar',
        'ui.bootstrap',
        'dashboard',
        'sync',
        'cgForm',
        'cgGrid',
        'idService',
        'appService',
        'stateTransitions',
        'templates-app',
        'templates-common',
        'ui.router.state',
        'ui.router',
        'security',
        'report',
        'enum',
        'hc',
        'resamp',
        'ngcamera',
        'toaster',
        'fixedHeader']
    )
    .config(function ($urlRouterProvider, $httpProvider) {

        var reqInterceptor = function () {
            return {
                'request': function (config) {
                    config.url = (config.url.indexOf("api/") !== -1) ? ('http://localhost:8080/' + config.url) : config.url
                    return config;
                }
            };

        }
        if (window.location.href.indexOf('build') != -1)
            $httpProvider.interceptors.push(reqInterceptor);

        $urlRouterProvider.otherwise('/enum/area')
    })