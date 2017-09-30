(function() {
  'use strict';

  angular
  .module('angular-ac')
  .controller('ActivitiesController', [
    'Call',
    function(Call) {
    console.info('[ActivitiesController] init');

    let activities = this;
    activities.calls = [];

    Call.getList().then(function(result) {
        activities.calls = result.data;
    });

  }]);

})();
