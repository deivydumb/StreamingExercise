"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Plataforma = /** @class */ (function () {
    function Plataforma(nombre, logo, descripcion, empresa) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.empresa = empresa;
        this.canal = [];
        this.categorias = [];
    }
    Plataforma.prototype.registrarCategoria = function (c) {
        this.categorias.push(c);
        return c;
    };
    Plataforma.prototype.registrarCanal = function (canal) {
        this.canal.push(canal);
        return canal;
    };
    return Plataforma;
}());
exports.default = Plataforma;
