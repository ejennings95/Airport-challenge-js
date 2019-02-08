var Airport = require('../../src/Airport.js')
var Plane = require('../../src/Plane.js')
var Weather = require('../../src/Weather.js')

describe("Airport Challenge", function() {
  var gatwick;
  var ma01;
  var ma02;
  var weatherSunny;

  beforeEach(function() {
    ma01 = new Plane();
    ma02 = new Plane();
    weather = jasmine.createSpyObj('weather', ['status']);
    gatwick = new Airport(weather);
  });

  it("should be able land a plane in an airport", function() {
    (weather.status).and.returnValue("sunny");
    expect(gatwick.land(ma01)).toEqual([ma01]);
  });

  it("should be able to land more than one plane", function() {
    (weather.status).and.returnValue("sunny");
    gatwick.land(ma01);
    expect(gatwick.land(ma02)).toEqual([ma01,ma02]);
  });

  it("Should not be possible to land in stormy weather", function(){
    (weather.status).and.returnValue("sunny");
    gatwick.land(ma01);
    (weather.status).and.returnValue("stormy");
    expect(function() {gatwick.land(ma01);} ).toThrow(new Error("Bad weather condition - unable to land or take off"));
  });

  it("Should throw an error when you try land a plane already landed", function() {
    (weather.status).and.returnValue("sunny");
    gatwick.land(ma01);
    expect(function() {gatwick.land(ma01);} ).toThrow(new Error("Already landed"));
  });
});
