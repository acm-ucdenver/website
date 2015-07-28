(function() {
  'use strict';

    var logger = console;  //someday, a different logger..

    angular
        .module('acmApp')
        .controller('officersController', ['officersService', officersController]);

    function officersController(officersService) {

        var vm = this;
        vm.allOfficers = [];
        vm.error = false;
        vm.getAllOfficers = getAllOfficers;

        activate();

        function activate() {
            getAllOfficers();
        }

        function getAllOfficers() {
            var promise = officersService.getOfficers()
            .then(
            function success(res) {
                vm.allOfficers = res;
            },
            function failure(res) {
                vm.error = true;
                logger.log('officersController error: ' + JSON.stringify(res));
            }
        );
    }
}

}());
