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
    Component.call(this, x, y, zIndex, width, height, angle, opacity);//costruttore di Component con i parametri successivi a this
    /*this = new Component();*/
    this.string = string;
    this.size = size;
    this.color = color;
    this.font = font;
    this.color = bold;
    this.font = italic;
}

function Chart(x, y, zIndex, width, height, angle, opacity, type, data, options) {
    Component.call(this, x, y, zIndex, width, height, angle, opacity);
    this.type = type;
    this.data = data;
    this.options = options;
}

function Image(x, y, zIndex, width, height, angle, opacity, path) {
    Component.call(this, x, y, zIndex, width, height, angle, opacity);
    this.path = path;
}

function Table(x, y, zIndex, width, height, angle, opacity, row, column, title, data) {
    Component.call(this, x, y, zIndex, width, height, angle, opacity);
    this.row = row;
    this.column= column;
    this.title = title;
    this.data=data; //elements of the table, they are components, usually Text
}

function RealTimeData(x, y, zIndex, width, height, angle, opacity, pathParser, pathHandler, pathFallback) {
    Component.call(this, x, y, zIndex, width, height, angle, opacity);
    this.pathParser = pathParser;
    this.pathHandler= pathHandler;
    this.pathFallback = pathFallback;
}

function Slide(x,y, id, convertedImagePath){
    this.id = id;    
    this.x = x;
    this.y = y;
    this.convertedImagePath=convertedImagePath;
};

function Presentation(id,projectId){
    this.id = id;    
    this.x = x;
}

function Infographic(id,path){
    this.id = id;    
    this.path = path;
}


function Project(id, ownerId){
    this.id = id;    
    this.ownerId = ownerId;
}

