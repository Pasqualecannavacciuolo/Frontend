"use strict";
exports.__esModule = true;
exports.Rectangle = void 0;
var Geometry_1 = require("./Geometry");
var Rectangle = /** @class */ (function () {
    function Rectangle(base, height) {
        this.geometry = Geometry_1.Geometry.RETTANGOLO;
        this.base = base;
        this.height = height;
    }
    Rectangle.prototype.getGeometry = function () {
        return this.geometry;
    };
    Rectangle.prototype.getBase = function () {
        return this.base;
    };
    Rectangle.prototype.getHeight = function () {
        return this.height;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
