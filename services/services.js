import { mostrarProductos } from "../JS/index.js";

const getLibros = () =>{
    fetch('./assets/libros.json')
    .then(res => res.json())
    .then(data => {
        mostrarProductos(data);
    })
    .catch(error => {
        console.log(error);
    })
}

export { getLibros }