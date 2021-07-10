var Rectangle = /** @class */ (function () {
    function Rectangle(height, width) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.height * this.width;
    };
    Rectangle.prototype.perimeter = function () {
        return this.width * 2 + this.height * 2;
    };
    return Rectangle;
}());
var r1 = new Rectangle(10, 15);
var r2 = new Rectangle(4, 3);
console.log(r1.area());
console.log(r1.perimeter());
