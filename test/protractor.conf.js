exports.config = {

    framework: 	'mocha',
    baseUrl:	'http://localhost:3000',

    specs: ['test/e2e/*-spec.js'],
    capabilities: {
    'browserName': 'chrome'
	// We'll probably want more browsers in here
  }           

}