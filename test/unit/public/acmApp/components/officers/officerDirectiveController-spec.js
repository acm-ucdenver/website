describe('officerDirectiveController', function() {
    var controller,
        $rootScope,
        $q,
        scope,
        mockOfficersService;

    beforeEach(module('acmApp'));

    beforeEach(function () {
        mockOfficersService = {
            saveOfficer: function () {
                var deferred = $q.defer();
                deferred.resolve(true);
                return deferred.promise;
            }
        };

        module(function ($provide) {
            $provide.value('officersService', mockOfficersService);
        });
    });

    beforeEach(inject(function (_$rootScope_, _$controller_, _$q_) {
        $rootScope = _$rootScope_;
        scope = _$rootScope_.$new();

        $q = _$q_;

        controller = _$controller_('officerDirectiveController', {$scope: scope});
    }));

    it('should make a call saveOfficers on savePressed()', function() {
        spyOn(mockOfficersService, 'saveOfficer').and.callThrough();

        controller.savePressed();

        expect(mockOfficersService.saveOfficer).toHaveBeenCalled();
    });

});
