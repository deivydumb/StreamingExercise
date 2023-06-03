"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stream = /** @class */ (function () {
    function Stream(nombre, descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categorias = [];
    }
    Stream.prototype.registrarCategoria = function (c) {
        this.categorias.push(c);
        console.log("Categoria Registrada");
        return c;
    };
    return Stream;
}());
exports.default = Stream;
