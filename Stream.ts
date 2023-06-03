import Categoria from "./Categoria";

class Stream  {

    nombre:String;
    categorias: Categoria[];
    descripcion:String;

    constructor(nombre:String, descripcion: String){
        this.nombre = nombre
        this.descripcion = descripcion
        this.categorias = []
}

    registrarCategoria(c: Categoria){
        this.categorias.push(c)
        console.log("Categoria Registrada")
        return c
    }
    
}
export default Stream;