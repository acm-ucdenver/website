(function() {
  'use strict';


  angular
  .module('acmApp')
  .factory('officersService', ['$http', '$q', officersService]);

function officersService ($http, $q) {
  var officersEndpoint = '/officers';
  var officersService = {
    getOfficers: getOfficers
  };

  function getOfficers() {
    var deferred = $q.defer();
    $http.get(officersEndpoint)
      .success(function(data) {
        deferred.resolve(data);
      })
      .error(function(err) {
        deferred.reject(err);
      });
    return deferred.promise;
  }

  return officersService;
}

}());