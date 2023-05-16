let nombreUsuario = prompt('Ingresa tu nombre').toUpperCase();
let contrasenia = prompt('Ingresa tu contraseña');

if ((nombreUsuario == "") || (contrasenia == "")) {
    alert("Por favor, ingrese un usuario o contraseña válida");
}else{
    alert("El Sombrero Seleccionador te dá la bienvenida, " + nombreUsuario);
    console.log(nombreUsuario + ' está jugando.');
}

function pregunta1(){
    let hechizoLevitatorio = prompt('¿Cuál es el hechizo levitatorio? Elige una opción \n1. Wingardium Leviosa. \n2. Expelliarmus. \n3. Revelio.');
    if ((hechizoLevitatorio == 1) || (hechizoLevitatorio.toUpperCase( ) == "WINGARDIUM LEVIOSA")){
        alert('¡CORRECTO!');
    } else {
        alert('Lo siento, es incorrecto');
    }
}
pregunta1();

function pregunta2(){
    let casa = prompt('El ingenio sin medida es el mayor tesoro del hombre" ¿es el lema de qué casa? Elige una opción \n1. Gryffindor. \n2. Hufflepuff. \n3. Ravenclaw. \n4. Slytherin');
    if ((casa == 3) || (casa.toUpperCase( ) == "RAVENCLAW")){
        alert('¡CORRECTO!');
    } else {
        alert('Lo siento, es incorrecto');
    }
}
pregunta2();

function pregunta3(){
    let troll = prompt('¿Quién noquea al troll en el baño de mujeres en Harry Potter y la piedra filosofal? Elige una opción \n1. Ron. \n2. Harry. \n3. Hermione. \n4. Snape');
    if ((troll == 2) || (troll.toUpperCase( ) == "HARRY")){
        alert('¡CORRECTO!');
    } else {
        alert('Lo siento, es incorrecto');
    }
}
pregunta3();

function pregunta4(){
    let elfo = prompt('¿Cómo se llama el elfo doméstico que bloquea el acceso a la plataforma 9 y 3/4? Elige una opción \n1. Winky. \n2. Kreacher. \n3. Dobby.');
    if ((elfo == 3) || (elfo.toUpperCase( ) == "DOBBY")){
        alert('¡CORRECTO!');
    } else {
        alert('Lo siento, es incorrecto');
    }
}
pregunta4();

function despedida(){
    if (nombreUsuario == "") {
        alert("Muchas gracias por jugar.");
    }else{
    alert("Muchas gracias por jugar, " + nombreUsuario + '.')
    console.log(nombreUsuario + ' ha dejado de jugar.')
    }
}
let saludoFinal = despedida();