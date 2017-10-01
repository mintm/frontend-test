(function() {
  'use strict';

  angular
  .module('angular-ac')
  .controller('ActivitiesController', [
    'Call',
    function(Call) {

    let activities = this;
    activities.state = 'loading';
    activities.callsByDay = [];

    Call.getList().then(function(result) {
      activities.callsByDay = Call.groupListByDay(result.data);
      activities.state = 'fetched';
    }).catch(function() {
      activities.state = 'error';
    });

    this.isLoading = function() {
      return activities.state === 'loading';
    };

    this.isNonEmptyList = function() {
      return activities.state === 'fetched' && activities.callsByDay.length > 0;
    };

    this.isEmptyList = function() {
      return activities.state === 'fetched' && activities.callsByDay.length === 0;
    };

    this.isError = function() {
      return activities.state === 'error';
    };

    this.isOutboundCall = function(call) {
        return call.direction === 'outbound';
    };

    this.getCallNumber = function(call) {
        return call.direction === 'outbound' ? call.to : call.from;
    };

  }]);

})();
