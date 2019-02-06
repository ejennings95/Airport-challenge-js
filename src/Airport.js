function Airport() {
  this._hangar = [];
};

Airport.prototype.hangar = function(){
  return this._hangar;
};

Airport.prototype.land = function(plane){
  if (plane.status() === false) {
    throw new Error("Already landed");
} else {
    plane.landed();
    this._hangar.push(plane);
    return (this.hangar());
}
};

Airport.prototype.takeOff = function(plane){
  if (plane.status() === true) {
    throw new Error("Already flying");
} else {
  plane.flying();
  var index = this._hangar.indexOf(plane);
  this._hangar.splice(index);
  return plane;
}
};

module.exports = Airport
