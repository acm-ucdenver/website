// this is a protractor test.
// get started at https://angular.github.io/protractor/

describe('acm website landing page', function() {
  it('should exist', function() {

    browser.driver.get('http://cse.ucdenver.edu/~acm');

    expect(browser.driver.findElement(by.xpath('.//body/h2')).getText()).toEqual('Our website is under construction');
  });
});
