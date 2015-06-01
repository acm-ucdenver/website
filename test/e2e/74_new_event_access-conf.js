exports.config = {

    framework:  'mocha',
    baseUrl:    'http://localhost:3000',

    specs: ['74_new_event_access-spec.js'],
    
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