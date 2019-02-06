function Weather() {
  this._sunnyWeather = true;
};

Weather.prototype.status = function(){
  return this._sunnyWeather;
};

Weather.prototype.randomGenerator = function() {
  return Math.ceil(Math.random() * 10)
};

Weather.prototype.check = function() {
  if (this.randomGenerator() > 8) {
    this._sunnyWeather = false
  } else {
    this._sunnyWeather = true
  };
};

module.exports = Weather
