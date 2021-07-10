var Rectangle2 = /** @class */ (function () {
    //#width: number; new way to delcare private properties
    function Rectangle2(height, width) {
        this.width = width;
        this.height = height;
    }
    Rectangle2.prototype.area = function () {
        return this.height * this.width;
    };
    Rectangle2.prototype.perimeter = function () {
        return this.width * 2 + this.height * 2;
    };
    return Rectangle2;
}());
var r21 = new Rectangle2(10, 15);
var r22 = new Rectangle2(4, 3);
console.log(r21.area());
console.log(r21.perimeter());
//console.log(r22.height); You cannot access the value of this property because it is private
