import Categoria from "./Categoria";
import Canal from "./Canal";


class Plataforma {

    nombre:String;
    logo: String;
    descripcion: String;
    empresa: String;
    canal: Canal[]
    categorias: Categoria[];
    
    constructor( nombre: String, logo: String, descripcion: String, empresa:String){
        this.nombre = nombre
        this.logo = logo
        this.descripcion = descripcion 
        this.empresa = empresa 
        this.canal = []
        this.categorias = []
    }

    registrarCategoria(c: Categoria){
        this.categorias.push(c)
        return c
    }

    registrarCanal(canal: Canal){
        this.canal.push(canal)
        return canal
    }
}
export default Plataforma;