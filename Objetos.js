// EJEMPLO DE OBJETO
const champion = {
    name: "Samira",
    damageType: "físico",
    skins: {
        skin1: "Samira anochecer",
        skin2: "Samira luna de sangre"
    }
};

// Añadir una nueva propiedad (similar a push)
const planBasic = { price: 34, duration: "mensual", users: 1 };
planBasic.certificate = "certificado";
console.log(planBasic);

// Añadir una propiedad al inicio (similar a unshift)
const desarrolloWeb = { curso1: "HTML,CSS", curso2: "JavaScript frontend", curso3: "React", curso4: "Vue" };
Object.assign({ curso0: "Fundamentos desde Cero" }, desarrolloWeb);
console.log(desarrolloWeb);

// Eliminar la última propiedad (similar a pop)
const rutaHTMLyCSS = {
    curso1: "Developer",
    curso2: "Practico Frontend",
    curso3: "HTML y CSS",
    curso4: "Responsive",
    curso5: "RutaEquivocada"
};
delete rutaHTMLyCSS.curso5;
console.log(rutaHTMLyCSS);

// Eliminar la primera propiedad (similar a shift)
const rutaJavaScript = {
    curso1: "Manipulacion del DOM",
    curso2: "Curso Api Rest"
};
delete rutaJavaScript.curso1;
console.log(rutaJavaScript);

// Copiar un objeto (similar a slice)
const frontendReact = { curso1: "React", curso2: "React con Vite.js", curso3: "PruebaTecnica" };
const copiaRutaFrontend = { ...frontendReact, curso0: "ObjetoCopia" };
console.log(copiaRutaFrontend);

// Obtener el número de propiedades (similar a length)
console.log(Object.keys(frontendReact).length);

// Buscar una propiedad (similar a find)
const planes = { plan1: "Basic", plan2: "Expert", plan3: "Expert Duo" };
const resultadoFind = Object.values(planes).includes("Basic");
console.log(resultadoFind ? "El plan sí se encuentra" : "No se encuentra el plan");

// Encontrar el índice de una propiedad (similar a findIndex)
const planExpert = { estudiantes: "1 Estudiante", duracion: "Anual", precioMes: "21$ Mes", precioAnual: "249$ Anual" };
const encontrarAnual = Object.keys(planExpert).find(key => planExpert[key] === "Anual");
console.log(encontrarAnual);

// Filtrar propiedades (similar a filter)
const planExpertDuo = { estudiantes: "2 estudiantes", duracion: "anual", precio: "329" };
const filteredObject = Object.fromEntries(
    Object.entries(planExpertDuo).filter(([_, value]) => value.endsWith("s"))
);
console.log(filteredObject);

// Desestructuración con Rest Operator
const courses = {
    intro: "Introduccion al Desarrollo Web",
    frontend: "Especialización Frontend Developer",
    backend: "Especialización Backend Developer",
    fullstack: "Especialización Fullstack Developer",
    software: "Especializaciones Software Developer"
};

const { intro, ...specializations } = courses;
console.log(intro);
console.log(specializations);

// Desestructuración con Spread Operator
const { intro: firstCourse, frontend: secondCourse, ...remainingCourses } = courses;

console.log("Primer Curso:", firstCourse);
console.log("Segundo Curso:", secondCourse);
console.log("Cursos restantes:", remainingCourses);