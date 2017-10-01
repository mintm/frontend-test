(function() {
  'use strict';

  const AIRCALL_TEST_API_BASE_URL = 'https' + ':/' + '/us-cen' + 'tral1-aircal' + 'l-c3fe8.cloud' + 'functions.net/aircal' + 'lJobP' + 'roxy?uri=';

  angular
  .module('angular-ac')
  .factory('Call', [
    '$http',
    function($http) {
      let _call = {};

      _call.getList = function() {
        return $http.get(AIRCALL_TEST_API_BASE_URL + '/activities');
      };

      // Group a fetched list of call by call
      _call.groupListByDay = function(calls) {
          let result = [];

          if (!calls || !calls.length) {
            return result;
          }

          calls.forEach(function(call) {
            // Use browser timezone
            const date = new Date(call.created_at);
            const day = date.getFullYear() + '-'
            + ('0' + (date.getMonth() + 1)).slice(-2) + '-'
            + ('0' + date.getDate()).slice(-2);

            let callsOfTheDay = null;
            result.forEach(function(byDay) {
              if (byDay.day === day) {
                // Get existing group
                callsOfTheDay = byDay;
              }
            });
            if (!callsOfTheDay) {
              // Create new group
              result.push({
                day: day,
                calls: []
              });
              callsOfTheDay = result[result.length - 1];
            }
            callsOfTheDay.calls.push(call);
          });
          return result;
        };

        _call.getDetail = function(callId) {
          return $http.get(AIRCALL_TEST_API_BASE_URL + '/activities/' + callId);
        };

        return _call;
    }

  ]);

})();
