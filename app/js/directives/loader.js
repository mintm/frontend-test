(function() {
  'use strict';

  angular
  .module('angular-ac')
  .directive('loader', function() {
    return {
        restrict : 'E',
        templateUrl : 'views/components/loader.html'
    };
  });

})();
