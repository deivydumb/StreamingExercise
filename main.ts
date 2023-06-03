import Plataforma from "./Plataforma";
import Categoria from "./Categoria"
import Canal from "./Canal";
import Streamer from "./Streamer"
import Stream  from "./Stream";



const listaPlataformas: Plataforma[] =[];
const listaCanales: Canal[] = [];
const listarStreamer: Streamer[] = [];
const listaStream:Stream[] = [];





let plataforma = new Plataforma("Deivydev","Deivydev-jpg","Deivyd Jhanpool","Diseño y desarrollo de software Numero 2")
plataforma.registrarCanal(new Canal("Deivydev","Deivydev-jpg","Deivyd Jhanpool","Diseño y desarrollo de software Numero 2"))
plataforma.registrarCategoria(new Categoria("Tecnologia","tecnologia.jpg","Contenido sobre tecnologia y similares"))

console.log("------Detalle plataforma-----------------")
console.log(plataforma)
console.log("-----------------------")



function AgregarPlataformas(nombre: String, logo: String, descripcion: String, empresa:String) {
    const plataforma = new Plataforma(nombre,logo,descripcion,empresa);
    listaPlataformas.push(plataforma)
    return listaPlataformas
    }



AgregarPlataformas("twitch","logo.jpg","Plataforma de streming","twitch S.A.S")   
AgregarPlataformas("twitch2","logo2.jpg","Plataforma de streaming","twitch S.A.S")   
AgregarPlataformas("twitch3","logo3.jpg","Plataforma de striming","twitch S.A.S")   
AgregarPlataformas("twitch4","logo4.jpg","Plataforma de striming","twitch S.A.S")   


console.log("-----Lista Plataforma-----------------")
console.log(listaPlataformas)
console.log("-----------------------")

function AgregarCanales(nomnbre:String,banner:String,streamer:String,descripcion:String){
    const canal = new Canal(nomnbre,banner,streamer,descripcion)
    listaCanales.push(canal)
    return listaCanales
}

AgregarCanales("midudev","midudev-jpg","miguel angel","Diseño y desarrollo de software")
AgregarCanales("Deivydev","Deivydev-jpg","Deivyd Jhanpool","Diseño y desarrollo de software Numero 2")
console.log("---------Lista Canales---------------")
console.log(listaCanales)
console.log("----------------------------------")

let streamer1 = new Streamer("Deivyd","Contenido de desarrollo")
streamer1.agregarRedesSociales("Facebook")
streamer1.agregarRedesSociales("Instagram")
streamer1.agregarStream(new Stream("Git y github", "Como funciona git y cuales son sus principales elementos"))
streamer1.agregarStream(new Stream("python", "Como funciona python y cuales son sus principales elementos"))

console.log("---------Detalles Streamer---------------")
console.log(streamer1)
console.log("----------------------------------")


function AgregarStreamer(nickname: String,descripcion: String){
    const streamer = new Streamer(nickname,descripcion)
    listarStreamer.push(streamer)
    return listarStreamer
}

AgregarStreamer("Deivyd","Contenido de desarrollo")
AgregarStreamer("Midudev","Contenido de desarrollo")
AgregarStreamer("ulthan","Creador de contenido de juegos")

console.log("---------Listado Streamers---------------")
console.log(listarStreamer)
console.log("----------------------------------")


let stream = new Stream("Desarollo de java", "Aprende los conceptos basicos de java y como funciona")
stream.registrarCategoria(new Categoria("Tecnologia","tecnologia.jpg","Contenido sobre tecnologia y similares"))
console.log("--------Detalles Stream---------------")
console.log(stream)
console.log("----------------------------------")


function AgregarStream(nombre:String, descripcion: String){

    const stream = new Stream(nombre,descripcion)
    listaStream.push(stream)
    return listaStream
}

AgregarStream("desarrollo en pocos pasos","Aprende los conceptos basicos de desarrollo de software")
AgregarStream("bloodborne","Juego de bloodborne")
console.log("---------Listado Streams---------------")
console.log(listaStream)
console.log("----------------------------------")