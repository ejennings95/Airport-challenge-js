var Airport = require('../../src/Airport.js')
var Plane = require('../../src/Plane.js')
var Weather = require('../../src/Weather.js')

describe("Airport Challenge", function() {
  var gatwick;
  var ma01;
  var ma02;

  beforeEach(function() {
    gatwick = new Airport();
    ma01 = new Plane();
    ma02 = new Plane();
  });

  it("should be able land a plane in an airport", function() {
    expect(gatwick.land(ma01)).toEqual([ma01]);
  });
});
