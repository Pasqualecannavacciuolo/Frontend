"use strict";
exports.__esModule = true;
var SimpleMath_1 = require("./SimpleMath");
var Geometry_1 = require("./Geometry");
var main = /** @class */ (function () {
    function main() {
        this.square = new SimpleMath_1.Square(2);
        this.rectangle = new SimpleMath_1.Rectangle(2, 9);
        this.triangle = new SimpleMath_1.Triangle(3, 3);
        this.sm = new SimpleMath_1.SimpleMath();
    }
    main.prototype.printSquare = function () {
        console.log("Area quadrato: " + this.sm.calcoloArea(this.square, Geometry_1.Geometry.QUADRATO));
    };
    main.prototype.printRectangle = function () {
        console.log("Area rettangolo: " + this.sm.calcoloArea(this.rectangle, Geometry_1.Geometry.RETTANGOLO));
    };
    main.prototype.printTriangle = function () {
        console.log("Area triangolo: " + this.sm.calcoloArea(this.triangle, Geometry_1.Geometry.TRIANGOLO));
    };
    return main;
}());
