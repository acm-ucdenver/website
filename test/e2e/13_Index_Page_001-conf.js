exports.config = {

    baseUrl:    'http://localhost:3000',

    specs: ['13_Index_Page_001-spec.js'],
    
    // We'll probably want more browsers in here
    multiCapabilities: [
        {
            'browserName': 'chrome',
        }/*, 
        {
            'browserName': 'firefox',
        }*/
    ],
    jasmineNodeOpts: {
        showColors: true   
    }
}