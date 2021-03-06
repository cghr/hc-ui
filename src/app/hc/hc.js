angular.module('hc', ['ui.router', 'routeConfigHandler', 'hcRoutes'])
    .config(function ($stateProvider, hcRoutes, RouteConfigHandler) {

        $stateProvider.state(hcRoutes.name, {
            url: hcRoutes.url,
            templateUrl: hcRoutes.tpl,
            controller:'hcCtrl'
        });

        RouteConfigHandler.configureRoutesForChildren($stateProvider, hcRoutes.name, hcRoutes.children);

    });
