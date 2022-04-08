"use strict";
exports.__esModule = true;
exports.type = void 0;
var type = /** @class */ (function () {
    function type() {
    }
    type.prototype.squareArea = function (square) {
        this.width = square.getLato();
        return this.width * this.width;
    };
    type.prototype.rectangleArea = function (rect) {
        this.width = rect.getBase();
        this.height = rect.getHeight();
        return this.width * this.height;
    };
    type.prototype.triangleArea = function (tr) {
        this.width = tr.getBase();
        this.height = tr.getHeight();
        return (this.width * this.height) / 2;
    };
    return type;
}());
exports.type = type;
