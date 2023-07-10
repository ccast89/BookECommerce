import { mostrarLibros } from "../JS/index.js";
import { filtrosCategorias } from "../JS/filtro.js";

const getLibros = () =>{
    fetch('./assets/libros.json')
    .then(res => res.json())
    .then(data => {
        mostrarLibros(data);
        filtrosCategorias(data);
    })
    .catch(error => {
        console.log(error);
    })
}

export { getLibros }