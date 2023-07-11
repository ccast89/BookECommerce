import { mostrarLibros } from "./index.js";
const filtrosCategorias = (LIBROS)=>{
    
    const safico = document.querySelector('#safico');
    safico.addEventListener('click', ()=>{
        const safico = LIBROS.filter(libro => libro.tipo === 'safico')
        mostrarLibros(safico);
    })

    const gay = document.querySelector('#gay');
    gay.addEventListener('click', ()=>{
        const gay = LIBROS.filter(libro => libro.tipo === 'gay')
        mostrarLibros(gay);
    })

    const trans = document.querySelector('#trans');
    trans.addEventListener('click', ()=>{
        const trans = LIBROS.filter(libro => libro.tipo === 'trans')
        mostrarLibros(trans);
    })

    const ingles = document.querySelector('#ingles');
    ingles.addEventListener('click', ()=>{
        const ingles = LIBROS.filter(libro => libro.tipo === 'ingles')
        mostrarLibros(ingles);
    })
}

export {filtrosCategorias};