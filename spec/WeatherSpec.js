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

  it("Should return false to sunnyWeather", function(){
    spyOn(Math, 'random').and.returnValue(0.9);
    weather.check()
    expect(weather.status()).toEqual(false);
  });

  it("Should return true to sunnyWeather", function(){
    spyOn(Math, 'random').and.returnValue(0.2);
    weather.check()
    expect(weather.status()).toEqual(true);
  });
});
