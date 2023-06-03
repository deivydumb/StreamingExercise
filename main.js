"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Plataforma_1 = require("./Plataforma");
var Categoria_1 = require("./Categoria");
var Canal_1 = require("./Canal");
var Streamer_1 = require("./Streamer");
var Stream_1 = require("./Stream");
var listaPlataformas = [];
var listaCanales = [];
var listarStreamer = [];
var listaStream = [];
var plataforma = new Plataforma_1.default("Deivydev", "Deivydev-jpg", "Deivyd Jhanpool", "Diseño y desarrollo de software Numero 2");
plataforma.registrarCanal(new Canal_1.default("Deivydev", "Deivydev-jpg", "Deivyd Jhanpool", "Diseño y desarrollo de software Numero 2"));
plataforma.registrarCategoria(new Categoria_1.default("Tecnologia", "tecnologia.jpg", "Contenido sobre tecnologia y similares"));
console.log("------Detalle plataforma-----------------");
console.log(plataforma);
console.log("-----------------------");
function AgregarPlataformas(nombre, logo, descripcion, empresa) {
    var plataforma = new Plataforma_1.default(nombre, logo, descripcion, empresa);
    listaPlataformas.push(plataforma);
    return listaPlataformas;
}
AgregarPlataformas("twitch", "logo.jpg", "Plataforma de streming", "twitch S.A.S");
AgregarPlataformas("twitch2", "logo2.jpg", "Plataforma de streaming", "twitch S.A.S");
AgregarPlataformas("twitch3", "logo3.jpg", "Plataforma de striming", "twitch S.A.S");
AgregarPlataformas("twitch4", "logo4.jpg", "Plataforma de striming", "twitch S.A.S");
console.log("-----Lista Plataforma-----------------");
console.log(listaPlataformas);
console.log("-----------------------");
function AgregarCanales(nomnbre, banner, streamer, descripcion) {
    var canal = new Canal_1.default(nomnbre, banner, streamer, descripcion);
    listaCanales.push(canal);
    return listaCanales;
}
AgregarCanales("midudev", "midudev-jpg", "miguel angel", "Diseño y desarrollo de software");
AgregarCanales("Deivydev", "Deivydev-jpg", "Deivyd Jhanpool", "Diseño y desarrollo de software Numero 2");
console.log("---------Lista Canales---------------");
console.log(listaCanales);
console.log("----------------------------------");
var streamer1 = new Streamer_1.default("Deivyd", "Contenido de desarrollo");
streamer1.agregarRedesSociales("Facebook");
streamer1.agregarRedesSociales("Instagram");
streamer1.agregarStream(new Stream_1.default("Git y github", "Como funciona git y cuales son sus principales elementos"));
streamer1.agregarStream(new Stream_1.default("python", "Como funciona python y cuales son sus principales elementos"));
console.log("---------Detalles Streamer---------------");
console.log(streamer1);
console.log("----------------------------------");
function AgregarStreamer(nickname, descripcion) {
    var streamer = new Streamer_1.default(nickname, descripcion);
    listarStreamer.push(streamer);
    return listarStreamer;
}
AgregarStreamer("Deivyd", "Contenido de desarrollo");
AgregarStreamer("Midudev", "Contenido de desarrollo");
AgregarStreamer("ulthan", "Creador de contenido de juegos");
console.log("---------Listado Streamers---------------");
console.log(listarStreamer);
console.log("----------------------------------");
var stream = new Stream_1.default("Desarollo de java", "Aprende los conceptos basicos de java y como funciona");
stream.registrarCategoria(new Categoria_1.default("Tecnologia", "tecnologia.jpg", "Contenido sobre tecnologia y similares"));
console.log("--------Detalles Stream---------------");
console.log(stream);
console.log("----------------------------------");
function AgregarStream(nombre, descripcion) {
    var stream = new Stream_1.default(nombre, descripcion);
    listaStream.push(stream);
    return listaStream;
}
AgregarStream("desarrollo en pocos pasos", "Aprende los conceptos basicos de desarrollo de software");
AgregarStream("bloodborne", "Juego de bloodborne");
console.log("---------Listado Streams---------------");
console.log(listaStream);
console.log("----------------------------------");
