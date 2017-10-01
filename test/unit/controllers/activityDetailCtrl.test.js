require('../test-helpers');

describe('the ActivityDetailController controller', function() {
  let $controller,
  $stateParams;

  beforeEach(function () {
    ngModule('angular-ac');

    ngInject(function(_$controller_) {
      $controller = _$controller_;
    });

    $stateParams = {
      id: 123456
    };
  });

  describe('initial', function () {

    it('should state equal to "loading"', function () {
      // Given
      const Call = {
        getDetail: function() {
          return {
            then: function() {
              return {
                catch: function() {}
              }
            }
          }
        }
      };

      // When
      const activityDetailCtrl = $controller('ActivityDetailController', { $stateParams, $stateParams, Call: Call });

      // Then
      expect(activityDetailCtrl.state).to.exist;
      expect(activityDetailCtrl.state).to.equal('loading');
    });

    it('should having empty detail', function () {
      // Given
      const Call = {
        getDetail: function() {
          return {
            then: function() {
              return {
                catch: function() {}
              }
            }
          }
        }
      };

      // When
      const activityDetailCtrl = $controller('ActivityDetailController', { $stateParams: $stateParams, Call: Call });

      // Then
      expect(activityDetailCtrl.detail).to.exist;
    });
  });

  describe('fetched data', function () {

    it('should state equal to "fetched"', function () {
      // Given
      const Call = {
        getDetail: function() {
          return {
            then: function(callback) {
              callback({
                data: []
              });

              return {
                catch: function() {}
              };
            }
          }
        }
      };

      // When
      const activityDetailCtrl = $controller('ActivityDetailController', { $stateParams: $stateParams, Call: Call });

      // Then
      expect(activityDetailCtrl.state).to.exist;
      expect(activityDetailCtrl.state).to.equal('fetched');
    });

    it('should populate detail', function () {
      // Given

      const EXPECTED_CALL_DETAIL = [{
        a: 'b'
      }];

      const Call = {
        getDetail: function() {
          return {
            then: function(callback) {
              callback({
                data: EXPECTED_CALL_DETAIL
              });

              return {
                catch: function() {}
              };
            }
          }
        }
      };

      // When
      const activityDetailCtrl = $controller('ActivityDetailController', { $stateParams: $stateParams, Call: Call });

      // Then
      expect(activityDetailCtrl.detail).to.exist;
      expect(activityDetailCtrl.detail).to.deep.equal(EXPECTED_CALL_DETAIL);
    });
  });

  describe('fetched failed', function () {

    it('should state equal to "error"', function () {
      // Given
      const Call = {
        getDetail: function() {
          return {
            then: function() {
              return {
                catch: function(callback) {
                  callback();
                }
              };
            }
          }
        }
      };

      // When
      const activityDetailCtrl = $controller('ActivityDetailController', { $stateParams: $stateParams, Call: Call });

      // Then
      expect(activityDetailCtrl.state).to.exist;
      expect(activityDetailCtrl.state).to.equal('error');
    });

  });

});
