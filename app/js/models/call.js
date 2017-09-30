(function() {
  'use strict';

  const AIRCALL_TEST_API_BASE_URL = 'https://aircall-job.herokuapp.com';

  angular
  .module('angular-ac')
  .factory('Call', [
    '$http',
    function($http) {
      let _call = {};

      _call.getList = function() {
        return $http.get(AIRCALL_TEST_API_BASE_URL + '/activities');
      };

      return _call;
    }
  ]);

})();
