// Creates a new object. We need to use the new kw.
function Colour(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Colour.prototype.rgb = function() {
  const {r, g, b} = this; // destructure r,g,b vals from this obj.
  return `rgb(${r}, ${g}, ${b})`;
}

Colour.prototype.hex = function() {
  const {r, g, b} = this;
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

Colour.prototype.rgba = function(a=1.0) {
  const {r, g, b} = this;
  return `rgb(${r}, ${g}, ${b}, ${a})`;
}
