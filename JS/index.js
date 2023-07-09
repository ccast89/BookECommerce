import { getLibros } from "../services/services.js";

const cargaInicial = ()=>{
    getLibros();
}

document.addEventListener('DOMContentLoaded', cargaInicial); 

const mostrarProductos = (LIBROS)=>{
    const $cards = document.querySelector('.cards');
    LIBROS.forEach(libro=> {
        const $div = document.createElement('div');
        $div.classList.add('"card","card-content"')
        
        const $h2 = document.createElement('h2');
        $h2.textContent = libro.nombre;
        
        const $autor = document.createElement('h6');
        $autor.textContent = libro.autor;

        const $img = document.createElement('img');
        $img.src = libro.imagen;

        const $desc = document.createElement('p');
        $desc.textContent = libro.descripcion;

        const $div2 = document.createElement('div');
        $div2.classList.add('"card","card-content"');

        const $precio = document.createElement('p');
        $precio.textContent = libro.precio;

        const $button = document.createElement('button');
        $button.textContent = 'Sumalo a tu biblioteca';

        $div.appendChild($h2);
        $div.appendChild($autor)
        $div.appendChild($img);
        $div2.appendChild($desc);
        $div.appendChild($div2);
        
        $div2.appendChild($precio);
        $div2.appendChild($button);

        $cards.appendChild($div);

    });



}
export {mostrarProductos}