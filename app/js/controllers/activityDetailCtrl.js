(function() {
  'use strict';

  angular
  .module('angular-ac')
  .controller('ActivityDetailController', ['$stateParams', 'Call',
  function($stateParams, Call) {

    let activity = this;
    activity.state = 'loading';
    activity.detail = {};

    Call.getDetail($stateParams.id).then(function(result) {
      activity.detail = result.data;
      activity.state = 'fetched';
    }).catch(function() {
      activity.state = 'error';
    });

    this.isLoading = function() {
      return activity.state === 'loading';
    };

    this.isError = function() {
      return activity.state === 'error';
    };

    this.isFetchedItem = function() {
      return activity.state === 'fetched';
    };

    this.isOutboundCall = function() {
      return activity.detail.direction === 'outbound';
    };

    this.toggleArchiveStatus = function() {
      Call.setDetail($stateParams.id, activity.detail).catch(function() {
        // TODO: Make better error display
        activity.state = 'error';
      });
    };

  }]);

})();
