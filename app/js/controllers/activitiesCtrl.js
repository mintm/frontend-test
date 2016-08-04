(function() {
  'use strict';

  angular
    .module('angular-ac')
    .controller('ActivitiesController', ['Call',
      function(Call) {
        console.info('[ActivitiesController] init');
        // TODO: retrieve all calls here
      }
    ]);

})();
