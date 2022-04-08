"use strict";
exports.__esModule = true;
exports.SimpleMath = exports.Triangle = exports.Rectangle = exports.Square = void 0;
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
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calcoloArea = function (o, geometry) {
        var lato;
        var lato2;
        if (geometry == Geometry_1.Geometry.QUADRATO) {
            var areaquadrato = void 0;
            lato = o.getLato;
            areaquadrato = lato * lato;
            return areaquadrato;
        }
        else if (geometry == Geometry_1.Geometry.RETTANGOLO) {
            var arearettangolo = void 0;
            lato = o.getBase;
            lato2 = o.getHeight;
            arearettangolo = lato * lato2;
            return arearettangolo;
        }
        else if (geometry == Geometry_1.Geometry.TRIANGOLO) {
            var areareatriangolo = void 0;
            lato = o.getBase;
            lato2 = o.getHeight;
            areareatriangolo = lato * lato2 / 2;
            return areareatriangolo;
        }
    };
    return SimpleMath;
}());
exports.SimpleMath = SimpleMath;
