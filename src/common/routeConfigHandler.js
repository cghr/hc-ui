angular.module('routeConfigHandler', [])
    .constant('RouteConfigHandler', {

        configureRoutesForChildren: function ($stateProvider, parentState, children) {

            var self = this;
            angular.forEach(children, function (child) {
                $stateProvider.state(parentState + '.' + child.name, {
                    url: child.url,
                    templateUrl: child.tpl,
                    title: child.title,
                    addNew: child.addNew,
                    abstract: (child.children) ? ((child.children.length > 0) ? true : false) : false,
                    msg: child.msg,
                    stateChangeStartMsg: child.stateChangeStartMsg,
                    data: child.children ? self.getData(child, children, parentState) : {}
                });

                if (child.children) {
                    self.configureRoutesForChildren($stateProvider, parentState + '.' + child.name, child.children);
                }
            });
        },
        getData: function (object, array, parentState) {

            var prevObject = object.prevState;
            var data = {
                prev: prevObject,
                children: object.children,
                thisState: {
                    name: parentState + '.' + object.name,
                    title: object.title,
                    addNew: object.addNew
                }
            };
            return data;
        }

    });