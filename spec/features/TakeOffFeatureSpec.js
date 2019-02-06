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
    gatwick.land(ma01);
    gatwick.land(ma02);
  });

  it("should be able to instruct a plane to take off from an airport", function() {
    expect(gatwick.takeOff(ma01)).toEqual(ma01);
    expect(gatwick.hangar()).not.toContain(ma01);
  });

  it("Should not be able to instruct a plane to take off from an airport if it is already flying", function(){
    gatwick.takeOff(ma01)
    expect(function() {gatwick.takeOff(ma01);} ).toThrow(new Error("Already flying"));
  });
});
