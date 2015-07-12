describe('officers Integrated Controller/Service', function() {
  var officersController,
    $rootScope,
    $httpBackend,
    $q,
    restUrl = '/officers';

  beforeEach(module('acmApp'));

  beforeEach(inject(function(_$q_, _$httpBackend_, _$rootScope_) {
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    $q = _$q_;
  }));

  // httpBackend needs to 'expect' the URL before the controller is
  // injected because the controller calls the service as soon as it
  // is injected
  beforeEach(inject(function($controller, _officersService_) {
    $httpBackend.expectGET(restUrl).respond($q.when({}));
    officersController = $controller('officersController', {
      officersService: _officersService_
    });
    $httpBackend.flush();
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('http-neutral tests', function() {

    it('controller and service should be injected in angular', function() {

      expect(officersController).toBeDefined();
      expect(officersController.toHaveProperty('allOfficers')).toBe(true);
      // if we have not yet thrown an error, then both service and controller are
      // loaded, because the controller calls the service on activate
    });

  });

  describe('http valid tests', function() {

    it('getAllOfficers()', function() {
      var data = [{ name: 'Max' }, { name: 'Min' }],
        successSpy = jasmine.createSpy('success'),
        failureSpy = jasmine.createSpy('failure');

      $httpBackend.expectGET(restUrl).respond($q.when(data));
      officersController.getAllOfficers().then(successSpy, failureSpy);

      $httpBackend.flush();

      expect(successSpy).toHaveBeenCalledWith(data);
      expect(failureSpy).not.toHaveBeenCalled();

      //expect(officersController.allOfficers).not.toBe(null);
      //expect(officersController.allOfficers.length).toBe(2);
    })

  });

});