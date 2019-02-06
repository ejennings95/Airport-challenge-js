var Airport = require('../src/Airport.js')

describe("Airport", function() {

  var gatwick;
  var ma01;
  var ma02;

  beforeEach(function() {
    ma01 = jasmine.createSpy("plane");
    ma02 = jasmine.createSpy("plane");
    gatwick = new Airport();
  });

  it("should be able land a plane in an airport", function() {
    expect(gatwick.land(ma01)).toEqual([ma01]);
  });

  it("should be able to land more than one plane", function() {
    gatwick.land(ma01);
    expect(gatwick.land(ma02)).toEqual([ma01,ma02]);
  });
});
