require('../test-helpers');

describe('the ActivityDetailController controller', () => {
  let $controller,
  $stateParams;

  beforeEach(() => {
    ngModule('angular-ac');

    ngInject((_$controller_) => {
      $controller = _$controller_;
    });

    $stateParams = {
      id: 123456
    };
  });

  describe('initial', () => {

    it('should state equal to "loading"', () => {
      // Given
      const Call = {
        getDetail: () => {
          return {
            then: () => {
              return {
                catch: () => {}
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

    it('should having empty detail', () => {
      // Given
      const Call = {
        getDetail: () => {
          return {
            then: () => {
              return {
                catch: () => {}
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

  describe('fetched data', () => {

    it('should state equal to "fetched"', () => {
      // Given
      const Call = {
        getDetail: () => {
          return {
            then: (callback) => {
              callback({
                data: []
              });

              return {
                catch: () => {}
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

    it('should populate detail', () => {
      // Given

      const EXPECTED_CALL_DETAIL = [{
        a: 'b'
      }];

      const Call = {
        getDetail: () => {
          return {
            then: (callback) => {
              callback({
                data: EXPECTED_CALL_DETAIL
              });

              return {
                catch: () => {}
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

  describe('fetched failed', () => {

    it('should state equal to "error"', () => {
      // Given
      const Call = {
        getDetail: () => {
          return {
            then: () => {
              return {
                catch: (callback) => {
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
