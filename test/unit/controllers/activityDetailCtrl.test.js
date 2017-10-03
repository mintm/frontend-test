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
          // TODO: Use AngularJS promise here
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
          // TODO: Use AngularJS promise here
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
        getDetail: (callId) => {
          expect(callId).to.equal($stateParams.id);

          return {
            // TODO: Use AngularJS promise here
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
        getDetail: (callId) => {
          expect(callId).to.equal($stateParams.id);

          return {
            // TODO: Use AngularJS promise here
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
        getDetail: (callId) => {
          expect(callId).to.equal($stateParams.id);

          return {
            // TODO: Use AngularJS promise here
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

  describe('toggleArchiveStatus() method', () => {
    let Call = {};

    beforeEach(() => {
      Call = {
        getDetail: () => {
          return {
            // TODO: Use AngularJS promise here
            then: (callback) => {
              callback({
                data: {
                  is_archived: false
                }
              });

              return {
                catch: () => {}
              };
            }
          }
        }
      };
    });

    it('should exit', () => {
      // When
      const activityDetailCtrl = $controller('ActivityDetailController', { $stateParams: $stateParams, Call: Call });

      // Then
      expect(activityDetailCtrl.toggleArchiveStatus).to.exist;
      expect(activityDetailCtrl.toggleArchiveStatus).to.be.an('function');
    });

    it('should call the API', (done) => {
      // Given

      const NEW_IS_ARCHIVED_VALUE = 'new_value';

      Call.setDetail = (callId, detail) => {
        expect(callId).to.equal($stateParams.id);
        expect(detail.is_archived).to.equal(NEW_IS_ARCHIVED_VALUE);

        done();

        return {
          // TODO: Use AngularJS promise here
          then: (callback) => {
            callback({
              data: {
                is_archived: true
              }
            });

            return {
              catch: () => {}
            };
          }
        }
      }

      const activityDetailCtrl = $controller('ActivityDetailController', { $stateParams: $stateParams, Call: Call });

      activityDetailCtrl.detail.is_archived = NEW_IS_ARCHIVED_VALUE;

      // When
      activityDetailCtrl.toggleArchiveStatus();
    });

    describe('set detail failed', () => {

      it('should state equal to "error"', () => {
        // Given
        Call.setDetail = () => {
          return {
            // TODO: Use AngularJS promise here
            catch: (callback) => {
              callback();
            }
          }
        };

        const activityDetailCtrl = $controller('ActivityDetailController', { $stateParams: $stateParams, Call: Call });

        // When
        activityDetailCtrl.toggleArchiveStatus();

        // Then
        expect(activityDetailCtrl.state).to.exist;
        expect(activityDetailCtrl.state).to.equal('error');
      });

    });

  });

});
