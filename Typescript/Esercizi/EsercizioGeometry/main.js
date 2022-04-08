"use strict";
exports.__esModule = true;
var type_1 = require("./type");
var main = /** @class */ (function () {
    function main() {
        this.tp = new type_1.type();
    }
    main.prototype.quadrato = function () {
        console.log(this.tp.squareArea);
    };
    return main;
}());
