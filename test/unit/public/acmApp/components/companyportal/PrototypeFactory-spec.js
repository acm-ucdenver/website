(function() {
    'use strict';

    describe('Service: prototypeFactory', PrototypeFactoryTest);

    function PrototypeFactoryTest () {
        beforeEach(module('acmApp'));

        var factory;
        var $httpBackend;
        var $q;

        beforeEach(inject(function (_$q_, _$httpBackend_, _prototypeFactory_) {
            factory = _prototypeFactory_;
            $httpBackend = _$httpBackend_;
            $q = _$q_;

            $httpBackend
                .whenGET('/prototypes')
                .respond({
                            "stuff": [
                                { "data": "some data" },
                                { "data": "some data" }, 
                                { "data": "some data" }
                            ]
                        });
        }));

        it("should get api data", function() {
            var returnedValue;

            factory.getAllPrototypes().then(function (result) {
                returnedValue = result;
            });

            $httpBackend.flush();
            expect(returnedValue.stuff.length).toBe(3);
        });
    }

})();
