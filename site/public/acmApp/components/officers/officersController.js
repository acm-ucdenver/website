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
        vm.allOfficers = res.body;
      },
      function(res) {
        vm.error = true;
        console.log('officersController error: ' + JSON.stringify(res));
      }
    )
  }
}