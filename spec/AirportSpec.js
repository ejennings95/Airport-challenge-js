var Airport = require('../src/Airport.js')
var Plane = require('../src/Plane.js')

describe("Airport", function() {
  var gatwick;
  var ma01;
  var ma02;

  beforeEach(function() {
    ma01 = jasmine.createSpyObj('ma01',['status', 'landed', 'flying']);
    ma02 = jasmine.createSpyObj('ma02',['status', 'landed', 'flying']);
    gatwick = new Airport();
  });

  it("should be able land a plane in an airport", function() {
    expect(gatwick.land(ma01)).toEqual([ma01]);
    expect(ma01.status).toHaveBeenCalled();
  });

  it("should not be able land a plane in an airport if it is alerady landed", function() {
    (ma01.status).and.returnValue(false);
    expect(function() {gatwick.land(ma01);} ).toThrow(new Error("Already landed"));
  });

  it("should be able to land more than one plane", function() {
    gatwick.land(ma01);
    expect(gatwick.land(ma02)).toEqual([ma01,ma02]);
  });

  it("Should be able to instruct a plane to take off from an airport", function(){
    gatwick.land(ma01);
    expect(gatwick.takeOff(ma01)).toEqual(ma01);
    expect(gatwick.hangar()).not.toContain(ma01);
  });

  it("Should not be able to instruct a plane to take off from an airport if it is already flying", function(){
    (ma01.status).and.returnValue(true);
    expect(function() {gatwick.takeOff(ma01);} ).toThrow(new Error("Already flying"));
  });

});
