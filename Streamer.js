"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Streamer = /** @class */ (function () {
    function Streamer(nickname, descripcion) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.stream = [];
        this.redesSociales = [];
    }
    Streamer.prototype.agregarRedesSociales = function (red) {
        this.redesSociales.push(red);
        return this.redesSociales;
    };
    Streamer.prototype.agregarStream = function (stream) {
        this.stream.push(stream);
        return this.stream;
    };
    return Streamer;
}());
exports.default = Streamer;
