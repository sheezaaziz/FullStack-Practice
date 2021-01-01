class Colour {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    this.misc();
  }
  // these methods are added to the prototype of the obj Colour.
  innerRgb() {
    const {r, g, b} = this;
    return `${r}, ${g}, ${b}`;
  }
  rgb() {
    return `rgb(${this.innerRgb()})`;
  }
  rgba(a=1.0) {
    return `rgba(${this.innerRgb()}, ${a})`;
  }
  hex() {
    const {r, g, b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  misc() {
    this.funFact = "Here is a fun fact about this colour."

  }
}
