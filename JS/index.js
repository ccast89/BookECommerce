import { getLibros } from "../services/services.js";

const body = document.body

let CARRITO = [];

const $carrito = document.querySelector('#contador');

document.addEventListener('DOMContentLoaded', cargaInicial); 

function cargaInicial() {
    obtenerCarritoDelLocalStorage();
    getLibros();
    mostrarCarrito();
}

const mostrarLibros = (LIBROS)=>{
    const $cards = document.querySelector('.cards');
    $cards.innerHTML = '';

    LIBROS.forEach(libro=> {
        const $div = document.createElement('div');
        $div.classList.add('card')
        
        const $h2 = document.createElement('h2');
        $h2.textContent = libro.nombre;
        
        const $autor = document.createElement('h6');
        $autor.textContent = libro.autor;

        const $img = document.createElement('img');
        $img.src = libro.imagen;

        const $desc = document.createElement('p');
        $desc.textContent = libro.descripcion;
        $desc.classList.add('descripcion')

        const $div2 = document.createElement('div');
        $div2.classList.add('"card","card-content"');

        const $precio = document.createElement('p');
        $precio.classList.add('precio');
        $precio.textContent = "$" + libro.precio;
        
        const $div3 = document.createElement('div');
        $div3.classList.add('card');

        const $button = document.createElement('button');
        $button.textContent = 'Sumalo a tu biblioteca';
        $button.classList.add('boton-card');
        $button.addEventListener('click', ()=>{
            agregarAlCarrito(libro);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se agregó al carrito',
                showConfirmButton: false,
                timer: 1500,
                width: '400px',
            })
        })

        $div.appendChild($h2);
        $div.appendChild($autor)
        $div.appendChild($img);
        $div.appendChild($desc);

        $div2.appendChild($precio);
        $div2.appendChild($button);

        $div.appendChild($div2);

        $cards.appendChild($div);

    });

}

const agregarAlCarrito =(libro) =>{
    const libroEnCarrito = CARRITO.find(item => item.id === libro.id)

    if(libroEnCarrito){
        libroEnCarrito.cantidad++;
    }else{
        CARRITO.push({
            id: libro.id,
            nombre: libro.nombre,
            precio: libro.precio,
            imagen: libro.imagen,
            cantidad: 1
        })
    }
    
    const totalCantidad = CARRITO.reduce((total, item) => total + item.cantidad, 0);
    $carrito.textContent = totalCantidad;
        
    mostrarCarrito();

    guardarCarritoEnLocalStorage();
}


const mostrarCarrito = () => {
    const $contenedorCarrito = document.querySelector('.contenedor_compras');
    
    $contenedorCarrito.innerHTML = '';
    
    CARRITO.forEach (libro =>{
        const $div = document.createElement('div');
        $div.classList.add('tbody');
    
        const $div2 = document.createElement('div');
        $div2.classList.add('columna_1');
    
        const $img = document.createElement('img');
        $img.classList.add('img_cart');
        $img.src = libro.imagen;
    
        $div2.appendChild($img);
        $div.appendChild($div2);
    
        const $div3 = document.createElement('div');
        $div3.classList.add('columna_2');
        $div3.textContent = libro.nombre;
        $div.appendChild($div3);
    
        const $div4 = document.createElement('div');
        $div4.classList.add('columna_3');
    
        const $input = document.createElement('input');
        $input.type = 'number';
        $input.value = libro.cantidad;

        $input.addEventListener('change', () => {
            cambiarCantidad(libro.id, +($input.value));
            totalIndividual(libro.id, libro.precio, +($input.value));
        })
    
        $div4.appendChild($input);
        $div.appendChild($div4);
    
        const $div5 = document.createElement('div');
        $div5.classList.add('columna_4');
        $div5.textContent = `$ ${libro.precio * libro.cantidad}`;
        $div.appendChild($div5);
    
        const $div6 = document.createElement('div');
        $div6.classList.add('columna_5');
    
        const $button = document.createElement('button');
        $button.textContent = 'X';
        
        $button.addEventListener('click', () => {
            eliminarLibro(libro.id);
            const totalCantidad = CARRITO.reduce((total, item) => total + item.cantidad, 0);
            $carrito.textContent = totalCantidad;
            if(CARRITO == 0){
                CARRITO = [];
                $contenedorCarrito.innerHTML = ''
            }
            Swal.fire({
                icon: 'error',
                title: 'Se eliminó del carrito',
                text: 'Puedes volver a agregarlo cuando quieras',
            });
        });

    
        $div6.appendChild($button);
        $div.appendChild($div6);

        $contenedorCarrito.appendChild($div);

        const totalCantidad = CARRITO.reduce((total, item) => total + item.cantidad, 0);
        $carrito.textContent = totalCantidad;
        });


        const $div7 = document.createElement('div');
        $div7.classList.add('columna_2')
        $div7.classList.add('total');
        const total = CARRITO.reduce((acc, item)=> acc + (item.precio * item.cantidad), 0);
        $div7.textContent = 'TOTAL: $' + total;
        $contenedorCarrito.appendChild($div7);


        const $div8 = document.createElement('div');
        $div8.classList.add('columna_4');
        
        const $buttonCompra = document.createElement('button');
        $buttonCompra.classList.add('columna_4');
        $buttonCompra.classList.add('botonCompra');
        $buttonCompra.textContent = 'Comprar';

        $buttonCompra.addEventListener('click', () => {
            CARRITO = [];
            $contenedorCarrito.innerHTML = '';
            const totalCantidad = CARRITO.reduce((total, item) => total + item.cantidad, 0);
            $carrito.textContent = totalCantidad;
            Swal.fire({
                icon: 'success',
                title: '¡Gracias por elegirnos!',
                text: 'Esperamos que sea una lectura inspiradora. ¡Volvé pronto!',
            });
            guardarCarritoEnLocalStorage();
        });

        $div8.appendChild($buttonCompra);
        $contenedorCarrito.appendChild($div8);
}



const eliminarLibro = (id)=>{
    CARRITO = CARRITO.filter(libro => libro.id !== id);
    
    mostrarCarrito();
    guardarCarritoEnLocalStorage();
}

const guardarCarritoEnLocalStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(CARRITO));
}

const obtenerCarritoDelLocalStorage = () => {
    if(localStorage.getItem('carrito')){
        CARRITO = JSON.parse(localStorage.getItem('carrito'));
    }else{
        CARRITO = [];
    }
}

const cambiarCantidad = (id, cantidad)=>{
    const libro = CARRITO.find(libro => libro.id === id);
    libro.cantidad = cantidad;
    
    mostrarCarrito();
    guardarCarritoEnLocalStorage();
}

const totalIndividual = (id, precio, cantidad)=>{
    const libro = CARRITO.find (libro => libro.id === id);
    if(cantidad > 0){
        libro.total = precio * cantidad;
    }else{
        eliminarLibro(id);
    }

    mostrarCarrito();
    guardarCarritoEnLocalStorage();


    
}
export {mostrarLibros}

//MODO OSCURO
const buttonDarkMode = document.querySelector("#dark");
buttonDarkMode.addEventListener("click", cambiarADark);

function cambiarADark(){
    body.classList.toggle("dark-mode");
    
    if(body.classList.contains("dark-mode")){
        buttonDarkMode.innerText = "Modo Claro"
    }else{
        buttonDarkMode.innerText = "Modo Oscuro"
    }
}

