describe('AppCtrl', function () {
    describe('isCurrentUrl', function () {
        var AppCtrl, $location, $scope;

        beforeEach(module('myApp'));

        beforeEach(inject(function ($controller, _$location_, $rootScope) {
            $location = _$location_;
            $scope = $rootScope.$new();
            AppCtrl = $controller('AppCtrl', { $location: $location, $scope: $scope });
        }));

        it('should load the AppCtrl', inject(function () {
            expect(!!AppCtrl).toBeTruthy();
        }));
    });
});

