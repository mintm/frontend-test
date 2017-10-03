(function() {
  'use strict';

  angular
  .module('angular-ac')
  .directive('reload', function() {
    return {
        restrict : 'E',
        templateUrl : 'views/components/reload_button.html'
    };
  });

})();
