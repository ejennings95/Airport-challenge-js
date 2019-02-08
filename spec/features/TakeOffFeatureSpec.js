var Airport = require('../../src/Airport.js')
var Plane = require('../../src/Plane.js')
var Weather = require('../../src/Weather.js')

describe("Airport Challenge", function() {
  var gatwick;
  var heathrow;
  var ma01;
  var ma02;
  var weather;

  beforeEach(function() {
    ma01 = new Plane();
    ma02 = new Plane();
    weather = jasmine.createSpyObj('weather', ['status']);
    gatwick = new Airport(weather);
    heathrow = new Airport(weather);
    gatwick.land(ma01);
    gatwick.land(ma02);
  });

  it("should be able to instruct a plane to take off from an airport", function() {
    (weather.status).and.returnValue("sunny");
    expect(gatwick.takeOff(ma01)).toEqual(ma01);
    expect(gatwick.hangar()).not.toContain(ma01);
  });

  it("Should not be able to instruct a plane to take off from an airport if it is already flying", function(){
    (weather.status).and.returnValue("sunny");
    gatwick.takeOff(ma01);
    expect(function() {gatwick.takeOff(ma01);} ).toThrow(new Error("Already flying"));
  });

  it("Should not be possible to take off in stormy weather", function(){
    (weather.status).and.returnValue("stormy");
    expect(function() {gatwick.takeOff(ma01);} ).toThrow(new Error("Bad weather condition - unable to land or take off"));
  });

  it("should not be able to take off if not in the airport", function() {
    (weather.status).and.returnValue("sunny");
    expect(function() {heathrow.takeOff(ma01);} ).toThrow(new Error("Plane not in hangar"));
  });
});
