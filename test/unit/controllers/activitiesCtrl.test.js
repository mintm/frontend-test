require('../test-helpers');

describe('the ActivitiesController controller', function() {
  let $controller;

  beforeEach(function () {
    ngModule('angular-ac');

    ngInject(function(_$controller_) {
      $controller = _$controller_;
    });
  });

  describe('initial state', function () {

    it('should having empty call list', function () {
      const Call = {
        getList: function() {
          return {
            then: function() {}
          }
        }
      };

      const activitiesCtrl = $controller('ActivitiesController', { Call: Call });

      expect(activitiesCtrl.calls).to.exist;
      expect(activitiesCtrl.calls).to.be.empty;
    });

  });

  describe('fetched data', function () {

    it('should populate call list', function () {
      const EXPECTED = [{
        a: 'b'
      }, {
        c: 'd'
      }];

      const Call = {
        getList: function() {
          return {
            then: function(result) {
              result({
                data: EXPECTED
              });
            }
          }
        }
      };

      const activitiesCtrl = $controller('ActivitiesController', { Call: Call });

      expect(activitiesCtrl.calls).to.exist;
      expect(activitiesCtrl.calls).to.deep.equal(EXPECTED);
    });

  });

});
