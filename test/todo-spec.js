// this is a protractor test.
// get started at https://angular.github.io/protractor/

describe('acm website landing page', function() {
  it('should exist', function() {
    browser.get('cse.ucdenver.edu/~acm');

    expect(element(by.xpath('.//body/h2')).getText().toEqual('Our website is under construction');
  });
});