


function cargarSemestres() {
    var array = ["Primer Semestre", 
                "Segundo semestre", 
                "Tercer semestre", 
                "Cuarto semestre", 
                "Quinto Semestre", 
                "Sexto semestre", 
                "Séptimo semestre", 
                "Octavo semestre", 
                "Noveno semestre", 
                "Décimo semestre"];
    addOptions("semestre", array);
}


//Función para agregar opciones a un <select>.
function addOptions(domElement, array) {
    var selector = document.getElementsByName(domElement)[0];
    for (semestre in array) {
        var opcion = document.createElement("option");
        opcion.text = array[semestre];
        // Añadimos un value a los option para hacer mas facil escoger los pueblos
        opcion.value = array[semestre].toLowerCase()
        selector.add(opcion);
    }
}



function cargarMaterias() {
    // Objeto de semestres con materias
    var listaMaterias = {
      "primer semestre":  ["Calculo I",
                          "Algebra Lineal",
                          "Programación I",
                          "Fundamento de la Informática", 
                          "Ingles I",
                          "Sistema Contables"],

      "segundo semestre": ["Calculo II",
                          "Fisica I",
                          "Programacion II",
                          "Introducción a los Sistemas Operativos",
                          "Ingles II",
                          "Estadistica Descriptiva"],

      "tercer semestre":  ["Calculo III",
                          "Fisica II",
                          "Progrmación III",
                          "Teoria de Automatas y Lenguajes Formal",
                          "Teoria de Probabilidades",
                          "Combinatoria y Teoria de Grafos",
                          "Liderazgo Empresarial"],

      "cuarto semestre":  ["Calculo IV",
                          "Teoría de la Comunicación y Señales",
                          "Análisis Numerico",
                          "Administraciones de las Organizaciones",
                          "Arquitectura de Computadoras",
                          "Programación IV",
                          "Metodología de la investigación"],

      "quinto semestre":  ["Base de Datos I",
                          "Analisis de Sistemas I",
                          "Investigación Operativa I",
                          "Redes I",
                          "Economía General",
                          "Taller I"],
      "sexto semestre":   ["Preparación y Evaluación de Proyectos",
                          "Redes II",
                          "Base de Datos II",
                          "Analisis de Sistemas II",
                          "Investigación Operativa II",
                          "Taller I"],

      "séptimo semestre": ["Redes III",
                          "Base de Datos III",
                          "Ingeniería de Software I",
                          "Tecnología Multimedia",
                          "Taller II",
                          "Optativa I"],

      "octavo semestre":  ["Inteligencia Artificial",
                          "Ingeniería de Software II",
                          "Tecnología de Programación en Red",
                          "Laboratorio de Seguridad en Redes",
                          "Taller II",
                          "Optativa II"],

      "noveno semestre":  ["Robótica",
                          "Transmisión de voz y video",
                          "Legislación",
                          "Taller III",
                          "Optativa III"],

      "décimo semestre":  ["Auditoría Informática",
                          "Taller III",
                          "Optativa IV"]
      
    }
    
    var semestres = document.getElementById('semestre')
    var materias = document.getElementById('materia')
    var semestreSeleccionado = semestres.value
    
    // Se limpian los materias
    materias.innerHTML = '<option value="">Seleccione un Pueblo...</option>'
    
    if(semestreSeleccionado !== ''){
      // Se seleccionan los materias y se ordenan
      semestreSeleccionado = listaMaterias[semestreSeleccionado]
      semestreSeleccionado.sort()
    
      // Insertamos los materias
      semestreSeleccionado.forEach(function(materia){
        let opcion = document.createElement('option')
        opcion.value = materia
        opcion.text = materia
        materias.add(opcion)
      });
    }
    
  }
  alert("hola mundo")
 // Iniciar la carga de semestres solo para comprobar que funciona
cargarSemestres();





// $(document).ready(function (){
//   var provincias = ["Gran Chaco", "Oconnor","Cercado"];
//   var provincia_s = ["villa", "yacuiba","bermejo"];

//   var departamento = ["tarija","santa cruz","noce"];

//   for (var i = 0; i < departamento.length; i++) {
//       var option = document.createElement("option");
//       $(option).html(departamento[i]);
//       $(option).appendTo("#departamento"); 
//   }

//   function cargar(){
//       var get = document.getElementById("departamento");
//       console.log(get)
//       if (get.value == 'tarija') {
//         for (var i = 0; i < departamento.length; i++) {
//           var option = document.createElement("option");
//           $(option).html(provincias[i]);
//           $(option).appendTo("#provincias"); }
//       }else{
//         if (get == "santa cruz") {
//           for (var i = 0; i < provincia_s.length; i++) {
//               var option = document.createElement("option");
//               $(option).html(provincia_s[i]);
//               $(option).appendTo("#provincias");
//             }
//         }
//       }
    
//   }

// })
