require('../test-helpers');

describe('the Call model', () => {
  let Call,
  $http;

  beforeEach(() => {
    ngModule('angular-ac');

    ngInject((_Call_, _$http_) => {
      Call = _Call_;
      $http = _$http_;
    })
  });

  describe('getList() method', () => {

    it('should exit', () => {
      // Then
      expect(Call.getList).to.exist;
      expect(Call.getList).to.be.an('function');
    });

    it('should call the API', (done) => {
      // Given
      $http.get = (url) => {
        expect(url).to.exist;
        expect(url).to.be.a('string');

        done();
      };

      // When
      Call.getList();
    });

    it('should return the API call', () => {
      // Given

      const OUT = 'Promise here';

      $http.get = () => {
        return OUT;
      };

      // When
      const result = Call.getList();

      // Then
      expect(result).to.equal(OUT);
    });

  });

  describe('groupListByDay() method', () => {

    it('should exit', () => {
      // Then
      expect(Call.groupListByDay).to.exist;
      expect(Call.groupListByDay).to.be.an('function');
    });

    describe('empty list', () => {
      it('shoud return empty groups', () => {
        // When
        const result = Call.groupListByDay([]);

        // Then
        expect(result).to.be.an('array');
        expect(result.length).to.equal(0);
      });
    });

    describe('with data', () => {

      it('shoud return data', () => {
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

      it('shoud group by day', () => {
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

    it('shoud group by day with timezone', () => {
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

  describe('getDetail() method', () => {
    const CALL_ID = 42;

    it('should exit', () => {
      // Then
      expect(Call.getDetail).to.exist;
      expect(Call.getDetail).to.be.an('function');
    });

    it('should call the API', (done) => {
      // Given
      $http.get = (url) => {
        expect(url).to.exist;
        expect(url).to.be.a('string');

        done();
      };

      // When
      Call.getDetail(CALL_ID);
    });

    it('should return the API call', () => {
      // Given

      const OUT = 'Promise here';

      $http.get = () => {
        return OUT;
      };

      // When
      const result = Call.getDetail(CALL_ID);

      // Then
      expect(result).to.equal(OUT);
    });

  });

  describe('setDetail() method', () => {
    const CALL_ID = 42;

    it('should exit', () => {
      // Then
      expect(Call.setDetail).to.exist;
      expect(Call.setDetail).to.be.an('function');
    });

    it('should call the API', (done) => {
      // Given

      const DETAIL = {
        a: 'b'
      };

      $http.post = (url, detail) => {
        expect(url).to.exist;
        expect(url).to.be.a('string');

        expect(detail).to.deep.equal(DETAIL);

        done();
      };

      // When
      Call.setDetail(CALL_ID, DETAIL);
    });

    it('should return the API call', () => {
      // Given

      const OUT = 'Promise here';

      $http.post = () => {
        return OUT;
      };

      // When
      const result = Call.setDetail(CALL_ID, {});

      // Then
      expect(result).to.equal(OUT);
    });

  });

});
