"use strict";
exports.__esModule = true;
exports.Square = void 0;
var Geometry_1 = require("./Geometry");
var Square = /** @class */ (function () {
    function Square(lato) {
        this.geometry = Geometry_1.Geometry.QUADRATO;
        this.lato = lato;
    }
    Square.prototype.getGeometry = function () {
        return this.geometry;
    };
    Square.prototype.getLato = function () {
        return this.lato;
    };
    return Square;
}());
exports.Square = Square;
