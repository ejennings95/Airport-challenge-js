function Airport() {
  this._hangar = [];
};

Airport.prototype.hangar = function(){
  return this._hangar;
};

Airport.prototype.land = function(plane){
  this._hangar.push(plane);
  return this.hangar();
};

Airport.prototype.takeOff = function(plane){
  var index = this._hangar.indexOf(plane);
  this._hangar.splice(index);
  return plane;
};

module.exports = Airport
