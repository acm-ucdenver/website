// this is a protractor test.
// get started at https://angular.github.io/protractor/
// this file should be renamed something like "staticTest", "landingTest", or something, but 
// i left it as todo-spec.js for those comparing with the tutorial at the protractor site.

describe('acm website landing page', function() {
  it('should exist', function() {
    browser.get('cse.ucdenver.edu/~acm');

    expect(element(by.xpath('.//body/h2')).getText().toEqual('Our website is under construction');
  });
});
