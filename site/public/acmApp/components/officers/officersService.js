angular
  .module('acmApp')
  .factory('officersService', ['http', officersService]);

function officersService ($http) {
  var officersEndpoint = '/officers';
  var officersService = {
    getOfficers: getOfficers
  };

  function getOfficers() {
    return $http.get(officersEndpoint);
  }

  return officersService;
}