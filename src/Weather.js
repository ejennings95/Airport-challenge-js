function Weather() {
  this._condition = "sunny";
};

Weather.prototype.status = function(){
  this.check()
  return this._condition;
};

Weather.prototype.randomGenerator = function() {
  return Math.ceil(Math.random() * 10)
};

Weather.prototype.check = function() {
  if (this.randomGenerator() >= 8) {
    this._condition = "stormy"
  } else {
    this._condition = "sunny"
  };
};

module.exports = Weather
