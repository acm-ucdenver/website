angular
  .controller('officersController', ['officersService', officersController]);

function officersController(officersService) {

  vm = this;
  vm.allOfficers = [];
  vm.getAllOfficers = getAllOfficers;

  activate();

  function activate() {
    getAllOfficers();
  }

  function getAllOfficers() {
    officersService.getOfficers()
      .then()
      .success(function(res) {
        vm.allOfficers = res.body;
      })
      .error(function(res) {
        vm.allOfficers = [
          {
            name: 'error retrieving officers'
          }
        ];
      });
  }
}