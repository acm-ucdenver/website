describe('officersFactory', function() {
    var mock,
        officersFactory,
        restUrl = '/officers';

    beforeEach(module('acmApp'));
    beforeEach(function() {
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    })

    describe('')

});