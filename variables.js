// node --watch variables.js (para visualizar en tiempo real lo que vamos haciendo)

//Variables tipo simples
let vidasMario = 3
let velocidadTurbo = 1.5
let nombrePersonajes = "Mario"
let poderOculto = "⭐"
let esinvencible = false 
let nivelActual = undefined

//Variables tipo compuestas
let itemsRecogidos = ["moneda","estrella","hongo",3,"🚩"]

let enemigo = {
    tipo:"Browser",
    vidas:100
}

//console.log(itemsRecogidos);

//-----------------------------------------
//Strings - cadenas de caracteres
//Propiedades - Metodos

let passwordLUIGI = "12345Luigui"
console.log(passwordLUIGI.length);

//Metodo  - trim (para eliminar los espacion en blancos para no guardar en base de datos esto )
console.log(passwordLUIGI.trim());
//Metodo  -includes(Dara un valor booleano si encunetra el numero indicado o string)
console.log(passwordLUIGI.includes("6"));
//Metodo  -loweCase(minusculas)
console.log(passwordLUIGI.toLowerCase());
//Metodo  -upperCase(mayusculas)
console.log(passwordLUIGI.toUpperCase());

//ES6  nuevas caracteristicas
//Template strings
console.log(`El password de luigi es: ${passwordLUIGI}`);
//----------------------------------------------

let gamePricePS5 = 200.35
let gamePriceXBOX = "100.55"
//Casting 
console.log(+gamePriceXBOX+gamePricePS5);

// Ordenamiento de ejecuccion de los operadores ( * / + - ** ())

// ---------------------------------------------
let monedasMario = 500
let mondesYoshi = 1000

//ES 6 - operador ternario 
monedasMario <= mondesYoshi ? console.log("Gana Yoshi") : console.log("Gana Mario");

let nombreJugador //undefined (falso) 
!nombreJugador ? console.log("Provide a nickname") : console.log("Welcome Users");
//(! CAmbia el valor de F a V)


//Valores Falsos (falsy) y valores Verdaderos (Truthy)

//Comparacion estricta (compara el valor y el tipo de dato)

let vidasPrincesaPeach = "6"

vidasPrincesaPeach === 6 ? console.log("Pasa de nivel") : console.log("Pierde de nivel");

//----------------------------------------------
// LOOPS (Bucles)
const goals = ["Completar-nivel","Conseguir-mondeas","Derrotar-Browser","Pasar-Reino"]

goals.forEach((goal)=>{console.log(goal)});

newGoals = goals.map(goal=> goal.toUpperCase()) 
//Map no afecta al  arreglo original

console.log(goals);

console.log(newGoals);

//--------------------USO DE FUNCIONES-------------------

//Funcion autoejecutada
(function () {
    console.log("Trunks viende del futuro");
})
()

//Funciones Declaradas 
function getGokuAvatar(){
    console.log("photo/avatar/goku.png")
}
getGokuAvatar()

//Funciones Expresadas
const prepararGokuBatalla = function(){
    console.log("Goku esta listo para pelear");
    
}
prepararGokuBatalla()

//-----------------ARGUMENTOS------------------

const validarEmailGoku = function(email,token){
    console.log(`El token ${token} aumento los poderes de goku`);
}

validarEmailGoku("goku@gmail.com","semilla123")

//-----------------ARGUMENTOS OPCIONALES------------------

const validarTokenVegeta = function(token="semilla"){
    console.log(`El token ${token} aumento los poderes de vegeta`);
}
validarTokenVegeta()


//----------------RETORNO DE UNA FUNCION------------------

function retornoCapitulo() {
    // return "Nuevo enemigo apareció"
    // return 89
    // return true
    // return ["frezeer","Magin-boo","Cell"]
    // return{
    //     nombre:"capitulo-donde muere krillin",
    //     numero: 89
    // }
    return function(){
        return "Regresa Bills"
    }
}
console.log(retornoCapitulo()());

// --------------ES6------------------
const prepararGokuBatalaFreezer = () => console.log("Goku está listo para pelear");
prepararGokuBatalaFreezer()

// -------------------------------------
// -----------------OBJETOS------------------

const datosBanneritoGood = {
    name: "Bannerito",
    age:1,
    address:{
        city:"Machala",
        tlephone:12345
    },
    friends:["Cocodrilo", "Torero"],
    status: true
}
datosBanneritoGood.friends.forEach(friend=>console.log(friend));



// ---------------DESESTRUCTURACION--------------
// Renombramiento a status directamente en la desestructuracion
const {name,age,address,friends,status:estaActivo} = datosBanneritoGood
console.log(estaActivo);


// -------------------METODOS---------------------

const datosBugsBunny = {
    name: 'BugsBunny',
    age:5,
    address:{
        city:"Orlando",
        tlephone:123456
    },
    friends:["Coyote", "PatoLucas","Michael-Jordan"],
    status: true,
    girlfriend : "Lola"
}

datosBugsBunny.photo = "bugsbunny.png"
delete datosBugsBunny.girlfriend //Eliminar una clave valor
console.log(datosBugsBunny);


// Verifica si el obejto esta con datos vacios
console.log(Object.keys(datosBugsBunny).includes("") ? "Error faltan claves":"Estan todas las claves")



const datosNaruto= {
    name: "Naruto Uzumaki",
    age:17,
    address:{
        village: "Konoha",
        tlephone: 1234
    }
}

const datosNarutoBunny={...datosBugsBunny,...datosNaruto}

console.log(datosNarutoBunny);
