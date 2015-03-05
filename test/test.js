describe('The haversine service', function () {

    var start = {
        latitude: 38.898556,
        longitude: -77.037852
    };

    var end = {
        latitude: 38.897147,
        longitude: -77.043934
    };

    // All tests are rounded for sanity.

    var distance = {
        mi: 0.341,
        km: 0.549
    };

    var haversine;

    beforeEach(module('benharold.haversine'));

    beforeEach(inject(function (_haversine_) {
        haversine = _haversine_;
    }));

    it('should return the distance in miles if no unit is specified (' + distance.mi + ' mi)', function () {
        expect(parseFloat(haversine(start, end).toFixed(3))).toBe(distance.mi);
    });

    it('should return the distance in km if asked (' + distance.km + ' km)', function () {
        expect(parseFloat(haversine(start, end, {unit: 'km'}).toFixed(3))).toBe(distance.km);
    });

    it('should return false in the distance is below the threshold', function () {
        expect(haversine(start, end, {threshold: distance.mi - 0.001})).toBe(false);
        expect(haversine(start, end, {threshold: distance.km - 0.001, unit: 'km'})).toBe(false);
    });

    it('should return true if the distance is above the threshold', function () {
        expect(haversine(start, end, {threshold: distance.mi + 0.001})).toBe(true);
        expect(haversine(start, end, {threshold: distance.km + 0.001, unit: 'km'})).toBe(true);
    });

});
