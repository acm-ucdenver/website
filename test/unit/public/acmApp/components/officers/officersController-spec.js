describe('officersController', function() {
  var officersController,
    $rootScope,
    $q,
    restUrl = '/officers';

  beforeEach(module('acmApp', function($provide) {
    $provide.factory('officersService', function ($q) {
      return {
        getOfficers: getOfficers
      };

      function getOfficers() {
        return $q.when([{ name: 'officer1' }, { name: 'officer2' }]);
      }
    })
  }));

  beforeEach(inject(function($controller, _$httpBackend_, _$rootScope_, _officersService_) {
    officersController = $controller('officersController', {
      officersService: _officersService_
    });
    $rootScope = _$rootScope_;
    $rootScope.$digest();
  }));

  it('should be injected in angular', function() {
    expect(officersController).toBeDefined();
    expect(officersController.hasOwnProperty('allOfficers')).toBe(true);
  });

  describe('on activate', function() {

    it('should make a call out to officersService.getOfficers() and put the results in vm.allOfficers', function() {
      expect(officersController.allOfficers.length).toBe(2);
      expect(officersController.allOfficers[0].name).toBe('officer1');
      expect(officersController.allOfficers[1].name).toBe('officer2');
    });

  });

});
