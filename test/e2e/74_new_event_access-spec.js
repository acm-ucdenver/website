// User Story 74 : 'New Event Access - 004'
// https://github.com/amc-ucdenver/website/issues/74
// Sprint: Ponos

describe('', function() {

    // scenario 1
    describe('Developer accesses /event with GET', function() {
        // be sure to start the webservice first (duh)

        // put mock of event object into database

        beforeEach(function() {
            // browser.get('/site/address');
        });
        
        it('should pass a JSON array of all event objects over HTTP', function() {
            // GET      
            // code to examine response object
        });
        
        it('should issue a 200 status code', function() {
            // GET
            // code to test status code 
        }); 

        it('should be idempotent in its response', function() {
            // code to make GET multiple times and compare results
        });
    })

    // ... more scenarios
})