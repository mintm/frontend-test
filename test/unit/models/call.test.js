require('../test-helpers');

describe('the Call model', function() {
  let Call,
  $http;

  beforeEach(function () {
    ngModule('angular-ac');

    ngInject(function (_Call_, _$http_) {
      Call = _Call_;
      $http = _$http_;
    })
  });

  describe('getList() method', function () {

    it('should call the API', function () {
      spy($http, 'get');

      Call.getList();

      expect($http.get.calledOnce).to.be.true;

      $http.get.restore();
    });

    it('should return the API call', function () {
      const EXPECTED = 'ok';

      $http.get = function() {
        return EXPECTED;
      };

      const result = Call.getList();

      expect(result).to.equal(EXPECTED);
    });

  });
});
