(function() {
  'use strict';

  angular
  .module('angular-ac')
  .directive('reloadButton', [
    '$state',
    function($state) {
    return {
        restrict : 'E',
        templateUrl : 'views/components/reload_button.html',
        link: function($scope) {
          $scope.reload = function() {
            $state.reload();
          };
        }
    };
  }]);

})();
