function Component(x, y, zIndex, width, height, angle, opacity) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.zIndex = zIndex;
    this.x = x;
    this.angle = angle;
    this.opacity = opacity;
}

function Text(x, y, zIndex, width, height, angle, opacity, string, size, color, font, bold, italic) {
    Component.call(this, x, y, zIndex, width, height, angle, opacity);
    /*this = new Component();*/
    this.string = string;
    this.size = size;
    this.color = color;
    this.font = font;
    this.color = bold;
    this.font = italic;
}
Text.prototype = new Component();

/* DOVREBBE ESERE GIUSTO CON QUELLI QUI SOTTO*/
Text.prototype.string;
Text.prototype.size;
Text.prototype.color;
Text.prototype.font;
Text.prototype.color;
Text.prototype.font;
