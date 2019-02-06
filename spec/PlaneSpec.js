var Plane = require('../src/Plane.js')

describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
});

  it("Should have a _flying status of '' to begin with", function() {
    expect(plane.status()).toEqual('')
  });

  it("Should have a _flying status of true when in the air", function() {
    plane.flying()
    expect(plane.status()).toEqual(true)
  });

  it("Should have a _flying status of false when it is landed", function() {
    plane.landed()
    expect(plane.status()).toEqual(false)
  });
});
