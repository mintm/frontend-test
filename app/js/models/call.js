(function() {
  'use strict';

  angular
  .module('angular-ac')
  .factory('Call', [
    function() {
      var _call = {};

      // Get call list from the server
      _call.getList = function() {
        // TODO: fetch the call list here

        return [];
      };

      return _call;
    }
  ]);

})();
