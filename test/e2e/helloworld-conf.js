exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    //framework:  'mocha',

    baseUrl:    'http://localhost:3000',

    specs: ['helloworld-spec.js'],
    
    // We'll probably want more browsers in here
    multiCapabilities: [
        {
            'browserName': 'chrome',
        }, 
        {
            'browserName': 'firefox',
        }
    ]          

}