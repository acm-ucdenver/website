describe('Controller: navBarController', function () {
    beforeEach(module('acmApp'));

    var scope;
    var $rootScope;

    beforeEach(inject(function (_$rootScope_, _$controller_) {
        $rootScope = _$rootScope_;
        scope = _$rootScope_.$new();
        _$controller_('navBarController', {$scope: scope});
    }));

    it('should have a variable named items that has data', function () {
        expect(scope.items).not.toBeNull();
    });

    describe('scope.items', function () {
        it('should each have a title', function () {
            for (var item in scope.items) {
                expect(item.title).not.toBeNull();
            }
        });

        it('should each have a state', function () {
            for (var item in scope.items) {
                expect(item.state).not.toBeNull();
            }
        });
    });
});