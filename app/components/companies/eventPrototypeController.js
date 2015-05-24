// 'eventPrototypeController'
// calls query to get event prototypes from the database
//   attaches array of event prototypes to $scope
//   gets all "link" attributes for each event prototype
//   generates an array of image URLs, attaches this to $scope

// 'eventPrototypeDirective'
// returns a template of content for each event prototype
// templateURL='eventPrototypeTemplate.html' or 'eventPrototypeAdminTemplate.html'
//   returns as edittext fields with submit button if user == admin