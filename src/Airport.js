var Weather = require('./Weather.js')

function Airport(weather = new Weather()) {
  this._hangar = [];
  this._weather = weather;
};

Airport.prototype.hangar = function(){
  return this._hangar;
};

Airport.prototype.land = function(plane){
  if (this._weather.status() === "stormy"){
    throw new Error("Bad weather condition - unable to land or take off");
  }
  if (plane.status() === false) {
    throw new Error("Already landed");
} else {
    plane.landed();
    this._hangar.push(plane);
    return (this.hangar());
}
};


Airport.prototype.takeOff = function(plane){
 if (this._weather.status() === "stormy"){
   throw new Error("Bad weather condition - unable to land or take off");
 }
else if (this._weather.status() === "sunny"){
  if (plane.status() === true) {
    throw new Error("Already flying");
} else {
  if (!this._hangar.includes(plane)){
    throw new Error("Plane not in hangar");
  }
  plane.flying();
  var index = this._hangar.indexOf(plane);
  this._hangar.splice(index);
  return plane;
}
};

};
module.exports = Airport
