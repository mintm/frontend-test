require('../test-helpers');

describe('the ActivitiesController controller', function() {
  let $controller;

  beforeEach(function () {
    ngModule('angular-ac');

    ngInject(function(_$controller_) {
      $controller = _$controller_;
    });
  });

  describe('initial', function () {

    it('should state equal to "loading"', function () {
      // Given
      const Call = {
        getList: function() {
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
      const activitiesCtrl = $controller('ActivitiesController', { Call: Call });

      // Then
      expect(activitiesCtrl.state).to.exist;
      expect(activitiesCtrl.state).to.equal('loading');
    });

    it('should having empty call list', function () {
      // Given
      const Call = {
        getList: function() {
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
      const activitiesCtrl = $controller('ActivitiesController', { Call: Call });

      // Then
      expect(activitiesCtrl.callsByDay).to.exist;
      expect(activitiesCtrl.callsByDay).to.be.empty;
    });
  });

  describe('fetched data', function () {

    it('should state equal to "fetched"', function () {
      // Given
      const Call = {
        getList: function() {
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
        },
        groupListByDay: function(data) {
          return [];
        }
      };

      // When
      const activitiesCtrl = $controller('ActivitiesController', { Call: Call });

      // Then
      expect(activitiesCtrl.state).to.exist;
      expect(activitiesCtrl.state).to.equal('fetched');
    });

    it('should group by day', function (done) {
      // Given

      const CALLS = [{
        a: 'b'
      }];

      const Call = {
        getList: function() {
          return {
            then: function(callback) {
              callback({
                data: CALLS
              });

              return {
                catch: function() {}
              };
            }
          }
        },
        groupListByDay: function(data) {
          expect(data).to.exist;
          expect(data).to.deep.equal(CALLS);

          done();

          return [];
        }
      };

      // When
      const activitiesCtrl = $controller('ActivitiesController', { Call: Call });
    });

    it('should populate grouped list', function () {
      // Given

      const EXPECTED_CALLS_BY_DAY = [{
        a: 'b'
      }];

      const Call = {
        getList: function() {
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
        },
        groupListByDay: function(data) {
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

  describe('fetched failed', function () {

    it('should state equal to "error"', function () {
      // Given
      const Call = {
        getList: function() {
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
      const activitiesCtrl = $controller('ActivitiesController', { Call: Call });

      // Then
      expect(activitiesCtrl.state).to.exist;
      expect(activitiesCtrl.state).to.equal('error');
    });

  });

});
