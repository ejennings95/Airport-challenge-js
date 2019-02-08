var Weather = require('../src/Weather.js')

describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  it("Should return a number between 1-10", function(){
    expect(weather.randomGenerator()).toBeGreaterThan(0);
    expect(weather.randomGenerator()).toBeLessThan(11);
  });

  it("Should return stormy when weather condition is called", function(){
    spyOn(Math, 'random').and.returnValue(0.9);
    expect(weather.status()).toEqual("stormy");
  });

  it("Should return sunny when weather condition is called", function(){
    spyOn(Math, 'random').and.returnValue(0.2);
    expect(weather.status()).toEqual("sunny");
  });
});
