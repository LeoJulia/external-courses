
var isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function Shape(name){
    var arr = Array.from(arguments);
    this._type = this.constructor.toString();
    this.name = name || 'Unnamed ' + this.getType();
    this._sides = arr.filter(function(elem){
        return !!isNumber(elem);
    });
}

Shape.prototype.getType = function(){
    return this._type;
}

Shape.prototype.draw = function(){
    return console.log(this.name + ' is drawn');
}

Shape.prototype.constructor.toString = function(){
    return 'Shape';
}

Shape.prototype.getPerimeter = function(){
    return this._sides.reduce(function(sum, elem){
        return sum + elem;
    }, 0);
}

function Triangle(name, a, b, c){
    Shape.apply(this, arguments);
    this.a = a || 1;
    this.b = b || 1;
    this.c = c || 1;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;
Triangle.prototype.constructor.toString = function(){
    return 'Triangle';
}

function Quadrangle(name, a, b, c, d){
    Shape.apply(this, arguments);
    this.a = a || 1;
    this.b = b || 1;
    this.c = c || 1;
    this.d = d || 1;
}

Quadrangle.prototype = Object.create(Shape.prototype);
Quadrangle.prototype.constructor = Quadrangle;
Quadrangle.prototype.constructor.toString = function(){
    return 'Quadrangle';
}

function Rectangle(name, a, b){
    Quadrangle.apply(this, arguments);
    this.a = a || 1;
    this.b = b || 1;
}

Rectangle.prototype = Object.create(Quadrangle.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.constructor.toString = function(){
    return 'Rectangle';
}

Rectangle.prototype.getPerimeter = function(){
    return (this.a + this.b) * 2;
}

function Square(name, a){
    Rectangle.apply(this, arguments);
    this.a = a || 1;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.constructor.toString = function(){
    return 'Square';
}

Square.prototype.getPerimeter = function(){
    return this.a * 4;
}


var triangle = new Triangle('trian', 1, 2, 3);
console.log(triangle.getType());
triangle.draw();
console.log(triangle.getPerimeter());

console.log(' ');

var quadrangle = new Quadrangle('quadr', 1, 2, 3, 4);
console.log(quadrangle.getType());
quadrangle.draw();
console.log(quadrangle.getPerimeter());

console.log(' ');

var rectangle = new Rectangle('rectang', 4, 1);
console.log(rectangle.getType());
rectangle.draw();
console.log(rectangle.getPerimeter());

console.log(' ');

var square = new Square('squ', 2);
console.log(square.getType());
square.draw();
console.log(square.getPerimeter());