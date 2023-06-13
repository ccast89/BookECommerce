const d = document;
const carrito = [];
const body = document.body

const libros = [
    {
        "id": 'nunca',
        "img": "../assets/images/book-covers/lo-que-nunca-fuimos.jpg",
        "nombre": 'Lo que nunca fuimos',
        "autor": 'Mike Lightwood',
        "tipo":'gay',
        "descripcion": 'Como muchos millennials que están ya rozando la treintena, Eric atraviesa una situación económica complicada. Decidido a probar suerte en otro sitio, comienza a trabajar en un colegio como monitor de extraescolares. Lo que no sabe es que allí se encontrará a quien menos espera. Una historia sobre los primeros amores y la ilusión, sobre la perdida y las segundas oportunidades.',
        "precio": 14.676,
    },
    {
        "id": 'nosotros',
        "img": "../assets/images/book-covers/y-si-fueramos-nosotros.jpg",
        "nombre": '¿Y si fueramos nosotros?',
        "autor": 'Becky Albertalli',
        "tipo":'gay',
        "descripcion": 'Arthur está en Nueva York solo por el verano, pero si Broadway le ha enseñado algo es que el universo te puede enviar un impresionante romance cuando menos te lo esperas. Ben piensa que el universo debe ocuparse de sus propios asuntos. Si el universo lo apoyara, no estaría en camino a la oficina del correo llevando una caja con las pertenencias de su exnovio.Pero cuando Ben y Arthur se encuentran en el correo, ¿qué es exactamente lo que el universo les tiene reservado?',
        "precio": 13.648,
    },
    {
        "id": 'cuentan',
        "img": "../assets/images/book-covers/lo-que-cuentan-de-nosotros.jpg ",
        "nombre": 'Lo que cuentan de nosotros',
        "autor": 'Iñigo Aguas',
        "tipo":'gay',
        "descripcion": 'Enzo está hecho un lío. Acaba de cortar con su novio, pero pronto empieza a echarlo de menos y decide escribir una novela que cuenta su historia. Lo que no sabe es que una productora le comprará los derechos audiovisuales para hacer una película sobre ellos, y que volverá a ver a su ex cuando este se presente al casting para hacer de... él mismo.',
        "precio": 16.596,
    },
    {
        "id": 'parada',
        "img": "../assets/images/book-covers/una-ultima-parada.jpg",
        "nombre": 'Una última parada',
        "autor": 'Casey McQuiston',
        "tipo":'Safico',
        "descripcion": 'August, una joven de veintitrés años, no cree en casi nada. Ni en los videntes, ni en las amistades que se entablan con facilidad, ni en encontrar esa clase de amor que sale en las películas. Entonces llega Jane. La misteriosa e imposible Jane. Con mucho carácter, una sonrisa amable y el pelo alborotado, aparece para ayudar a August cuando ella más lo necesita.',
        "precio": 7.177,
    },
    {
        "id": 'siete',
        "img": "../assets/images/book-covers/los-siete.jpg",
        "nombre": 'Los siete maridos de Evelyn Hugo',
        "autor": 'Taylor Jenkins Reid',
        "tipo":'Safico',
        "descripcion": 'Evelyn Hugo, el ícono de Hollywood que se ha recluido en su edad madura, decide al fin contar la verdad sobre su vida llena de glamour y de escándalos. Pero cuando elige para ello a Monique Grant, una periodista desconocida, nadie se sorprende más que la misma Monique. ¿Por qué ella? ¿Por qué ahora?',
        "precio": 16.287,
    },
    {
        "id": 'plan',
        "img": "../assets/images/book-covers/el-plan-c.jpg",
        "nombre": 'El Plan C',
        "autor": 'Anna Pólux',
        "tipo":'Safico',
        "descripcion": 'Sandie y Elizabeth son polos opuestos. Un reportaje las obliga a convivir durante una semana en la que descubrirán que no son tan incompatibles como pensaban.',
        "precio": 19.858,
    },
    {
        "id": 'jessica',
        "img": "../assets/images/book-covers/mi-hermano-se-llama-jessica.png",
        "nombre": 'Mi hermano se llama Jessica',
        "autor": 'John Boyne',
        "tipo":'Trans',
        "descripcion": 'Sam Waver es un chico solitario al que le cuesta hacer amigos, y sus padres están tan ajetreados que a veces se siente invisible. Por suerte, cuenta con su hermano mayor, Jason, quien parece tener una vida perfecta: no sólo es encantador y popular, también es la estrella del equipo de fútbol, y todas las chicas están deseando salir con él. Sam lo idolatra. Sin embargo, un día, Jason reúne a su familia para contarle un secreto que lleva guardando mucho tiempo: en realidad se llama Jessica. Sus padres no dan crédito y Sam descubre que no son las personas abiertas y tolerantes que creía. Las vidas de todos dan un vuelco y parece que las cosas nunca volverán a ser como antes.',
        "precio": 12.400,
    },
    {
        "id": 'chica',
        "img": "../assets/images/book-covers/si-yo-fuera.jpg",
        "nombre": 'Si yo fuera tu chica',
        "autor": 'Meredith Russo',
        "tipo":'Trans',
        "descripcion": 'AMANDA HARDY es la alumna nueva de la escuela en Lambertville; Tennesse. Como cualquier chica; lo unico que quiere es hacer amigos e integrarse. Pero Amanda mantiene un secreto. Existe una razón por la que se cambio de escuela en su último año y por la que tiene decidido no involucrarse con nadie.',
        "precio": 5.175,
    },
    {
        "id": 'stay',
        "img": "../assets/images/book-covers/stay-gold.png",
        "nombre": 'Stay gold: No dejes de ser tú mismo',
        "autor": 'Tobly McSmith',
        "tipo":'Trans',
        "descripcion": 'Cuando la gente ve a George, cree que es un niño. Pero ella sabe que es una niña. Un día, su profesora anuncia que su clase va a representar una obra de teatro. Y George desea con todas sus fuerzas el papel de la niña protagonista, Charlotte. Pero su profesora le dice que ni siquiera puede hacer la prueba para el papel... porque es un chico. Con la ayuda de Kelly, su mejor amiga, George traza un plan. No solo para poder ser Charlotte en la obra, sino para que todo el mundo sepa, de una vez por todas, que es "ella" en realidad.',
        "precio": 14.460,
    },
    {
        "id": 'cool',
        "img": "../assets/images/book-covers/cool-for-the-summer.jpg",
        "nombre": 'Cool for the summer',
        "autor": 'Dahlia Adler',
        "tipo":'Ingles',
        "descripcion": 'Lara has everything she ever wanted: a tight-knit group of friends, a job that borders on cool, and Chase, the boy of her literal dreams. But if she is finally got the guy, why can not she stop thinking about the girl? Cool for the Summer is a story of self-discovery and new love. It is about the things we want and the things we need. And it is about the people who will let us be who we are.',
        "precio":  17.192,
    },
    {
        "id": 'royal',
        "img": "../assets/images/book-covers/her-royal-highness.jpg",
        "nombre": 'Her Royal Highnes',
        "autor": 'Rachel Hawkins',
        "tipo":'Ingles',
        "descripcion": 't first, the girls can barely stand each other--Flora is both high-class and high-key--but before Millie knows it, she has another sort-of-best-friend/sort-of-girlfriend. Even though Princess Flora could be a new chapter in her love life, Millie knows the chances of happily ever afters are slim . . . after all, real life is not a fairy tale . . . or is it?',
        "precio": 3.442,
    },
    {
        "id": 'melt',
        "img": "../assets/images/book-covers/melt-with-you.jpg",
        "nombre": 'Melt with you',
        "autor": 'Jennifer Dugan',
        "tipo":'ingles',
        "descripcion": 'Fallon and Chloe used to be best friends, but last summer they hooked up right before Chloe left for college, and after a series of misunderstandings they are now not speaking to one another. A year later, Chloe is back home from school, and Fallon is doing everything in her power to avoid her--which is especially difficult because their moms own a business together, a gourmet ice cream truck where both girls work.',
        "precio": 16.194,
    }
]

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

function mostrarLibros(){
    const $store = d.getElementById("store");
    
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
        $store.appendChild(libro);
        libro.querySelector('button').addEventListener('click', ()=>{
            agregarAlCarrito(l.id);
        })
    })
}

mostrarLibros();

function agregarAlCarrito (id){
    let libro = libros.find(libro => libro.id == id);
    let libroEnCarrito = carrito.find(libro=> libro.id == id);
    if(libroEnCarrito){
        libroEnCarrito.cantidad++;
    }else{
        libro.cantidad = 1;
        carrito.push(libro);
    }
    mostrarCarrito()
}

function mostrarCarrito(){
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
            <p>${l.precio}</p>
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
