//INPUTS
var preguntaNombre = document.getElementById("preguntaNombre");
var preguntaEdad = document.getElementById("preguntaEdad");
var preguntaPais= document.getElementById("preguntaPais");
var preguntaCorreo = document.getElementById("preguntaCorreo")
var preguntaIngresos = document.getElementById("preguntaIngresos");
//Etiqueta P
var nombre = document.getElementById("nombre");
var edad = document.getElementById("edad");
var pais = document.getElementById("pais");
var correo = document.getElementById("correo");
var ingresos = document.getElementById("ingresos");
// BOTON
var boton = document.getElementById("boton");
// CARD
var respuesta = document.getElementById("respuestaa");
// RESPUESTA DE ADOPCION
function resultados(){
    var dataNombre = preguntaNombre.value;
    var dataEdad = preguntaEdad.value;
    var dataPais = preguntaPais.value;
    var dataCorreo = preguntaCorreo.value;
    var dataIngresos = preguntaIngresos.value;
    console.log(dataNombre);
    console.log(dataEdad);
    console.log(dataPais);
    console.log(dataCorreo);
    console.log(dataIngresos);
    nombre.innerHTML = dataNombre;
    edad.innerHTML = dataEdad;
    pais.innerHTML = dataPais;
    correo.innerHTML = dataCorreo;
    if(dataIngresos <= 5000 && dataIngresos < 10000){
        ingresos.innerHTML = "¡felicidades adoptaste un arbol!"
    } else if(dataIngresos >= 10000) {
        ingresos.innerHTML = "¡felicidades adoptaste un koala!"
    }
}