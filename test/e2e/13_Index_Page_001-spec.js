// User Story 13 : 'Index Page-001'
// https://github.com/amc-ucdenver/website/issues/13
// Sprint: Ponos

/*
Scenario 1: Index page shows upcoming events section
Given we direct the browser to a page with the upcoming events section
When the page is fully loaded
Then the user should see upcoming events section
And that section should be a table (or any other design requirements...)

Scenario 2: Upcoming Events displays events
Given we direct the browser to a page with the upcoming events section
When there are upcoming events
Then the user should see all display fields of an upcoming event displayed

Scenario 3: No Upcoming Events message
Given we direct the browser to a page with the upcoming events section
When there aren't any upcoming events
Then the user should see the message "There are no upcoming events."
*/

describe('As a student, I would like to see upcoming events on the index page', function() {

    beforeEach(function() {
        browser.get(''); // uses baseUrl from config, so this redirects to the declared base directory
        //browser.sleep(2000); // seems the angular content takes 2 seconds to get served up
    });

    
    // scenario 1
    describe('Index page shows upcoming events section', function() {

        it('the user should see upcoming events section', function() {
            var table = element(by.repeater('event'));
            expect(table).not.toBe(null);
        }); 
        
        it('that section should be a table (or any other design requirements...)', function() {
            var table = element(by.repeater('event'));
            expect(table.getTagName()).toBe('table');
        });
    });
    
    // scenario 2
    describe('Upcoming Events displays events', function() {
        
        it('the user should see all display fields of an upcoming event displayed', function() {
            var eventsInRepeater = element.all(by.repeater('event'));
            eventsInRepeater.then(function(events) {
                if (events.length > 0) {
                    for (event in events) {
                        element(by.binding('event.title'))
                            .getText()
                            .then(function(title) {
                                expect(title).not.toBe(null);
                            });
                        element(by.binding('event.startDate'))
                            .getText()
                            .then(function(startDate) {
                                expect(startDate).not.toBe(null);
                            });
                        element(by.binding('event.endDate'))
                            .getText()
                            .then(function(endDate) {
                                expect(endDate).not.toBe(null);
                            });
                        element(by.binding('event.description'))
                            .getText()
                            .then(function(description) {
                                expect(description).not.toBe(null);
                            });
                        element(by.binding('event.location'))
                            .getText()
                            .then(function(location) {
                                expect(location).not.toBe(null);
                            });
                        element(by.binding('event.rsvp'))
                            .getText()
                            .then(function(rsvp) {
                                expect(rsvp).not.toBe(null);
                            });
                        expect(element.all(by.binding('event.imgs.src')).count()).not.toEqual(0);
                    }
                } else {
                    console.log('\nNOTE: there were no events; scenario 2 not exercised.');   
                }
            });
        }); 
    });
    
    // scenario 3
    describe('No Upcoming Events message', function() {

        it('the user should see the message "There are no upcoming events."', function() {
            var eventsInRepeater = element.all(by.repeater('event'));
            eventsInRepeater.then(function(events) {
                if (events.length == 0) {
                    var noEvents = element(by.id('noEvents'));
                    expect(noEvents.getText()).toBe('There are no upcoming events.');
                } else {
                    console.log('\nNOTE: there were events; scenario 3 not exercised.');   
                }
            });
        }); 
    });


    // ... more scenarios
})