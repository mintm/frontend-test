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

    it('should exit', function () {
      // When
      expect(Call.getList).to.exist;
      expect(Call.getList).to.be.an('function');
    });

    it('should call the API', function (done) {
      // Given
      $http.get = function(url) {
        expect(url).to.exist;
        expect(url).to.be.a('string');

        done();
      };

      // When
      Call.getList();
    });

    it('should return the API call', function () {
      // Given

      const OUT = 'Promise here';

      $http.get = function() {
        return OUT;
      };

      // When
      const result = Call.getList();

      // Then
      expect(result).to.equal(OUT);
    });

  });

  describe('groupListByDay() method', function () {

    it('should exit', function () {
      // When
      expect(Call.groupListByDay).to.exist;
      expect(Call.groupListByDay).to.be.an('function');
    });

    describe('empty list', function() {
      it('shoud return empty groups', function() {
        // When
        const result = Call.groupListByDay([]);

        // Then
        expect(result).to.be.an('array');
        expect(result.length).to.equal(0);
      });
    });

    describe('with data', function() {

      it('shoud return data', function() {
        // Given

        const FIRST_ID = 100;
        const FIRST_CREATED_AT_DAY = '2010-01-01';
        const FIRST_CREATED_AT_FULL = FIRST_CREATED_AT_DAY + 'T10:00:00.000Z';

        const CALLS = [{
          id: FIRST_ID,
          created_at: FIRST_CREATED_AT_FULL
        }];

        // When
        const result = Call.groupListByDay(CALLS);

        // Then

        expect(result).to.be.an('array');
        expect(result.length).to.equal(1);

        expect(result[0].day).to.equal('2010-01-01');
        expect(result[0].calls.length).to.equal(1);
        expect(result[0].calls[0].id).to.equal(FIRST_ID);
        expect(result[0].calls[0].created_at).to.equal(FIRST_CREATED_AT_FULL);
      });

      it('shoud group by day', function() {
        // Given
        const CALLS = [{
          id: 300,
          created_at: '2010-01-02T10:00:00.000Z'
        }, {
        id: 200,
          created_at: '2010-01-01T20:00:00.000Z'
        }, {
          id: 100,
          created_at: '2010-01-01T10:00:00.000Z'
        }];

        // When
        const result = Call.groupListByDay(CALLS);

        // Then

        expect(result).to.be.an('array');
        expect(result.length).to.equal(2);

        expect(result[0].day).to.equal('2010-01-02');
        expect(result[0].calls.length).to.equal(1);
        expect(result[0].calls[0].id).to.equal(300);

        expect(result[1].day).to.equal('2010-01-01');
        expect(result[1].calls.length).to.equal(2);
        expect(result[1].calls[0].id).to.equal(200);
        expect(result[1].calls[1].id).to.equal(100);
      });

    });

    it('shoud group by day with timezone', function() {
      // Given

      const CALLS = [{
        id: 200,
        created_at: '2010-01-01T00:01:00.000Z'
      }, {
        id: 100,
        created_at: '2009-12-31T23:01:00.000Z'
      }];

      const date = new Date('2009-12-31T23:01:00.000Z');
      const EXPECTED_DAY = date.getFullYear() + '-'
      + ('0' + (date.getMonth() + 1)).slice(-2) + '-'
      + ('0' + date.getDate()).slice(-2);

      // When
      const result = Call.groupListByDay(CALLS);

      // Then

      expect(result).to.be.an('array');
      expect(result.length).to.equal(1);

      // TODO: Check on local with -6 and +6 timezones
      expect(result[0].day).to.equal(EXPECTED_DAY);
      expect(result[0].calls.length).to.equal(2);
      expect(result[0].calls[0].id).to.equal(200);
      expect(result[0].calls[1].id).to.equal(100);
    });

  });

});
