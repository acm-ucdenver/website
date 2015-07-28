(function () {
    'use strict';

    describe('Controller: companyPortalController', CompanyPortalControllerTest);

    function CompanyPortalControllerTest () {

        beforeEach(module('acmApp'));

        var scope;
        var $rootScope;
        var $controller;
        var $q;
        var mockPrototypeFactory;

        beforeEach(function () {
            mockPrototypeFactory = {
                getAllPrototypes: function () {
                    var deferred = $q.defer();
                    deferred.resolve('All the prototypes');
                    return deferred.promise;
                }
            };

            module(function ($provide) {
                $provide.value('prototypeFactory', mockPrototypeFactory);
            });
        });

        beforeEach(inject(function (_$rootScope_, _$controller_, _$q_) {
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
            $q = _$q_;
            $controller = _$controller_('companyPortalController', {$scope: scope});
        }));

        it('should get prototypes from prototype factory on init', function () {
            $rootScope.$apply();
            expect($controller.prototypes).toBe('All the prototypes');
        });
    }

})();
