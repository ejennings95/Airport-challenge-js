function Plane() {
  this._flying = '';
};

Plane.prototype.status = function(){
  return this._flying;
};

Plane.prototype.flying = function(){
  this._flying = true;
};

Plane.prototype.landed = function(){
  this._flying = false;
};

module.exports = Plane
