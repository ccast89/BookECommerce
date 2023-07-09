const d = document;
const carrito = [];
const body = document.body

async function obtenerLibros(){
    const respuesta = await fetch("./libros.json")
    const libros = await respuesta.json()
    return libros
}

async function mostrarLibros(){
    const libros = await obtenerLibros()
    const $libreria = document.getElementById("libreria")
    libros.forEach((l)=>{
        let libro = d.createElement('div')
        libro.classList.add("card","card-content");
        libro.innerHTML = `
            <img src="${l.img}">
            <h5>${l.nombre}</h5>
            <p>${l.autor}</p>
            <p>${l.tipo}</p>
            <p>${l.descripcion}</p>
            <p>${l.precio}</p>
            <button id="${l.id}">Agregar al carrito</button>
        `
        $libreria.appendChild(libro);
        libro.querySelector('button').addEventListener('click', ()=>{
                agregarAlCarrito(l.id);
            })
    })
}
mostrarLibros()

const buttonDarkMode = document.querySelector("#dark");
buttonDarkMode.addEventListener("click", cambiarADark)

function cambiarADark(){
    body.classList.toggle("dark-mode");
    
    if(body.classList.contains("dark-mode")){
        buttonDarkMode.innerText = "Cambiar a Modo Claro"
    }else{
        buttonDarkMode.innerText = "Cambiar a Modo Oscuro"
    }
}

// function mostrarLibros(){
//     const $store = d.getElementById("store");
    
//     libros.forEach((l)=>{
//         let libro = d.createElement('div')
//         libro.classList.add("card","card-content");
//         libro.innerHTML = `
//             <img src="${l.img}">
//             <h5>${l.nombre}</h5>
//             <p>${l.autor}</p>
//             <p>${l.tipo}</p>
//             <p>${l.descripcion}</p>
//             <p>${l.precio}</p>
//             <button id="${l.id}">Agregar al carrito</button>
//         `
//         $store.appendChild(libro);
//         libro.querySelector('button').addEventListener('click', ()=>{
//             agregarAlCarrito(l.id);
//         })
//     })
// }

// mostrarLibros();

async function agregarAlCarrito (id){
    let libro = await obtenerLibros();
    const libros = await respuesta.json();
    libros.find(libro => libro.id == id);
    let libroEnCarrito = carrito.find(libro => libro.id == id);
    if(libroEnCarrito){
        libroEnCarrito.cantidad++;
    }else{
        libro.cantidad = 1; 
        carrito.push(libro);
    }
    mostrarCarrito()
}

async function mostrarCarrito(){
    let libro = await obtenerLibros();
    const libros = await respuesta.json();
    const $carrito = d.getElementById("carrito");
    $carrito.innerHTML = '',
    
    carrito.forEach((l, index)=>{
        let libro = d.createElement('div')
        libro.classList.add("card","card-content");
        libro.innerHTML = `
            <img src="${l.img}">
            <h5>${l.nombre}</h5>
            <p>${l.autor}</p>
            <pp${l.tipo}</p>
            <p>${l.precio * l.cantidad}</p>
            <p>${l.cantidad}</p>
            <button id="${l.id}">Eliminar del carrito</button>
        `
        $carrito.appendChild(libro);
        libro.querySelector('button').addEventListener('click', ()=>{
            eliminarDelCarrito(index);
        })
    })
}

function eliminarDelCarrito(indice){
    carrito[indice].cantidad--;
    if(carrito[indice].cantidad ===0){
        carrito.splice(indice, 1);
    }
    mostrarCarrito()
}
