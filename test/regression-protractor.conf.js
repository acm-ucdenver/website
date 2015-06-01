exports.config = {

    framework: 	'mocha',
    baseUrl:	'http://localhost:3000',

    specs: ['test/e2e/*-spec.js'],
    
    // We'll probably want more browsers in here
    multiCapabilities: [
    {
        'browserName': 'chrome',
    }, 
    {
        'browserName': 'firefox',
    }
  }           

}