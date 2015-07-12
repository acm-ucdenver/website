var logger = console;  //someday, a different logger..

angular
  .module('acmApp')
  .controller('officersController', ['officersService', officersController]);

function officersController(officersService) {

  vm = this;
  vm.allOfficers = [];
  vm.error = false;
  vm.getAllOfficers = getAllOfficers;

  activate();

  function activate() {
    getAllOfficers();
  }

  function getAllOfficers() {
    officersService.getOfficers()
      .then(
      function(res) {
        vm.allOfficers = res;
      },
      function(res) {
        vm.error = true;
        logger.log('officersController error: ' + JSON.stringify(res));
      }
    )
  }
}