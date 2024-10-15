// EJEMPLO DE ARRAY
const firstArray = [
    {
        name: "samira",
        damash: "fisico",
        skins: [
            { nameSkins: "Samira anochecer" },
            { nameSkins: "Samira luna de sangre" }
        ]
    }
];

// Push()
const planBasic = [34,"mensual",1];
planBasic.push("certificado")
console.log(planBasic);

// unshift()
const introduccionDesarrolloWeb= ["HTML,CSS","JavaScript frontend","React","Vue"];
introduccionDesarrolloWeb.unshift("Fundamentos desde Cero")
console.log(introduccionDesarrolloWeb);

// pop()
const rutaHTMLyCSS =["Developer",
    "Practico Frontend"
    ,"HTML y CSS",
    "Responsive",
    "RutaEquivocada"];
rutaHTMLyCSS.pop();
console.log(rutaHTMLyCSS);

// shift()
const rutaJavaScript = ["Manipulacion del Doom",
    "Curso Api Rest"];
rutaJavaScript.shift();
console.log(rutaJavaScript);

// slice()
const frontendReact = ["React","React con Vite.js","PruebaTecnica"];
copiaRutaFrontend = frontendReact.slice();
copiaRutaFrontend.unshift("ArrayCopia")
console.log(copiaRutaFrontend);

// lengt
console.log(frontendReact.length);

// método find. encuentra
const planes = ["Basic","Expert","Expert Duo"];
resultadoFind = planes.find((p) => p ==="Basic");
resultadoFind ? console.log("El plan si se encuentra") 
: console.log("No se encuentra el plan");

// findIndex encuentra el Indice
const planExpert =["1 Estudiante","Anual","21$ Mes","249$ Anual"]
const encontrarAnual = planExpert.findIndex((e)=>e === "Anual");
console.log(encontrarAnual);

// método filter
const planExpertDuo = ["2 estudiantes","anual","329"]
const filter1 = planExpertDuo.filter((b)=>b.endsWith("s"))
console.log(filter1);


// desestructuracion con Rest Operator
const courses = ["Introduccion al Desarrollo Web",
    "Especialización Frontend Developer",
    "Especialización Backend Developer",
    "Especialización Fullstack Developer",
    "Especializaciones Software Developer"]

const [introCourse,...specializations] = courses;
console.log(introCourse);
console.log(specializations);


// desestructuracion con Spread Operator
// Usando Spread Operator para extraer cursos
const [firstCourse, secondCourse, ...remainingCourses] = courses;

console.log("Primer Curso:", firstCourse); // "Introduccion al Desarrollo Web"
console.log("Segundo Curso:", secondCourse); // "Especialización Frontend Developer"
console.log("Cursos restantes:", remainingCourses); 






