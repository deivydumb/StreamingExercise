import Stream from "./Stream";

class Streamer {

    nickname: String;
    descripcion: String;
    redesSociales: String[];
    stream: Stream[];

    constructor(nickname: String,descripcion: String){
        this.nickname = nickname
        this.descripcion = descripcion 
        this.stream = []
        this.redesSociales = []
    }

    agregarRedesSociales(red: String){
        this.redesSociales.push(red)
        return this.redesSociales
    }
    agregarStream(stream: Stream){
        this.stream.push(stream)
        return this.stream
    }
}
export default Streamer;