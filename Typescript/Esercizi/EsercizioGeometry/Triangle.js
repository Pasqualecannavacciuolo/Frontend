"use strict";
exports.__esModule = true;
exports.Triangle = void 0;
var Geometry_1 = require("./Geometry");
var Triangle = /** @class */ (function () {
    function Triangle(base, height) {
        this.geometry = Geometry_1.Geometry.TRIANGOLO;
        this.base = base;
        this.height = height;
    }
    Triangle.prototype.getGeometry = function () {
        return this.geometry;
    };
    Triangle.prototype.getBase = function () {
        return this.base;
    };
    Triangle.prototype.getHeight = function () {
        return this.height;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
