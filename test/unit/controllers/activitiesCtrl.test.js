require('../test-helpers');

describe('the ActivitiesController controller', () => {
  let $controller;

  beforeEach(() => {
    ngModule('angular-ac');

    ngInject((_$controller_) => {
      $controller = _$controller_;
    });
  });

  describe('initial', () => {

    it('should state equal to "loading"', () => {
      // Given
      const Call = {
        getList: () => {
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
      const activitiesCtrl = $controller('ActivitiesController', { Call: Call });

      // Then
      expect(activitiesCtrl.state).to.exist;
      expect(activitiesCtrl.state).to.equal('loading');
    });

    it('should having empty call list', () => {
      // Given
      const Call = {
        getList: () => {
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
      const activitiesCtrl = $controller('ActivitiesController', { Call: Call });

      // Then
      expect(activitiesCtrl.callsByDay).to.exist;
      expect(activitiesCtrl.callsByDay).to.be.empty;
    });
  });

  describe('fetched data', () => {

    it('should state equal to "fetched"', () => {
      // Given
      const Call = {
        getList: () => {
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
        },
        groupListByDay: (data) => {
          return [];
        }
      };

      // When
      const activitiesCtrl = $controller('ActivitiesController', { Call: Call });

      // Then
      expect(activitiesCtrl.state).to.exist;
      expect(activitiesCtrl.state).to.equal('fetched');
    });

    it('should group by day', (done) => {
      // Given

      const CALLS = [{
        a: 'b'
      }];

      const Call = {
        getList: () => {
          return {
            then: (callback) => {
              callback({
                data: CALLS
              });

              return {
                catch: () => {}
              };
            }
          }
        },
        groupListByDay: (data) => {
          expect(data).to.exist;
          expect(data).to.deep.equal(CALLS);

          done();

          return [];
        }
      };

      // When
      const activitiesCtrl = $controller('ActivitiesController', { Call: Call });
    });

    it('should populate grouped list', () => {
      // Given

      const EXPECTED_CALLS_BY_DAY = [{
        a: 'b'
      }];

      const Call = {
        getList: () => {
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
        },
        groupListByDay: (data) => {
          return EXPECTED_CALLS_BY_DAY;
        }
      };

      // When
      const activitiesCtrl = $controller('ActivitiesController', { Call: Call });

      // Then
      expect(activitiesCtrl.callsByDay).to.exist;
      expect(activitiesCtrl.callsByDay).to.deep.equal(EXPECTED_CALLS_BY_DAY);
    });
  });

  describe('fetched failed', () => {

    it('should state equal to "error"', () => {
      // Given
      const Call = {
        getList: () => {
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
      const activitiesCtrl = $controller('ActivitiesController', { Call: Call });

      // Then
      expect(activitiesCtrl.state).to.exist;
      expect(activitiesCtrl.state).to.equal('error');
    });

  });

});
