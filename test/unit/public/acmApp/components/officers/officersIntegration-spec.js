describe('officers Integrated Controller/Service', function() {
  var officersController,
    $rootScope,
    $httpBackend,
    $q,
    restUrl = '/officers';

  beforeEach(module('acmApp'));

  beforeEach(inject(function(_$q_, _$httpBackend_, _$rootScope_) {
    $rootScope = _$rootScope_;
    $rootScope.$digest();
    $httpBackend = _$httpBackend_;
    $q = _$q_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('http-neutral tests', function() {

    beforeEach(inject(function($controller, _officersService_) {
      $httpBackend.expectGET(restUrl).respond($q.when([{}]));
      officersController = $controller('officersController', {
        officersService: _officersService_
      });
    }));

    it('controller and service should be injected in angular', function() {
      $httpBackend.flush();
      expect(officersController).toBeDefined();
    });

  });

  //describe('getAllOfficers()', function() {
  //  it('')
  //});

});