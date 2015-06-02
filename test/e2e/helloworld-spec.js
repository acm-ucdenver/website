// test that things are cool

describe('Hello', function() {

    beforeEach(function() {
        browser.get('');
    })

    it('should find the body tag', function() {
        expect(element(by.css('body'))).toBeDefined();
    });

})