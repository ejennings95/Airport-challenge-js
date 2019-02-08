var Airport = require('../src/Airport.js')
var Plane = require('../src/Plane.js')
var Weather = require('../src/Weather.js')

describe("Airport", function() {
  var gatwick;
  var ma01;
  var ma02;
  var weather;

  beforeEach(function() {
    ma01 = jasmine.createSpyObj('ma01',['status', 'landed', 'flying','']);
    ma02 = jasmine.createSpyObj('ma02',['status', 'landed', 'flying']);
    weather = jasmine.createSpyObj('weather', ['status']);
    gatwick = new Airport(weather);
  });

  it("should be able land a plane in an airport", function() {
    (weather.status).and.returnValue("sunny");
    expect(gatwick.land(ma01)).toEqual([ma01]);
    expect(ma01.status).toHaveBeenCalled();
  });

  it("should not be able land a plane in an airport if it is alerady landed", function() {
    (weather.status).and.returnValue("sunny");
    (ma01.status).and.returnValue(false);
    expect(function() {gatwick.land(ma01);} ).toThrow(new Error("Already landed"));
  });

  it("should be able to land more than one plane", function() {
    (weather.status).and.returnValue("sunny");
    gatwick.land(ma01);
    expect(gatwick.land(ma02)).toEqual([ma01,ma02]);
  });

  it("Should be able to instruct a plane to take off from an airport", function(){
    (weather.status).and.returnValue("sunny");
    gatwick.land(ma01);
    expect(gatwick.takeOff(ma01)).toEqual(ma01);
    expect(gatwick.hangar()).not.toContain(ma01);
  });

  it("Should not be able to instruct a plane to take off from an airport if it is already flying", function(){
    (ma01.status).and.returnValue(true);
    (weather.status).and.returnValue("sunny");
    expect(function() {gatwick.takeOff(ma01);} ).toThrow(new Error("Already flying"));
  });

  it("Should not be possible to land in stormy weather", function(){
    (weather.status).and.returnValue("sunny");
    gatwick.land(ma01);
    (weather.status).and.returnValue("stormy");
    expect(function() {gatwick.land(ma01);} ).toThrow(new Error("Bad weather condition - unable to land or take off"));
  });

  it("Should not be possible to take off in stormy weather", function(){
    (weather.status).and.returnValue("stormy");
    expect(function() {gatwick.takeOff(ma01);} ).toThrow(new Error("Bad weather condition - unable to land or take off"));
  });

  it("should not be able to take off if not in the airport", function() {
    (weather.status).and.returnValue("sunny");
    expect(function() {gatwick.takeOff(ma01);} ).toThrow(new Error("Plane not in hangar"));
  });
});
