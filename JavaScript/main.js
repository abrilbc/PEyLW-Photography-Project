console.log('main.js cargado');

document.addEventListener('DOMContentLoaded', function() {
    // Captura el formulario por su ID
    var form = document.getElementById('elFormulario');

    // Agrega un controlador de eventos para el evento 'submit'
    form.addEventListener('submit', function(event) {
      // Evita que el formulario se envíe
      event.preventDefault();
    });
  });

const fondos = [
    'url("../Imagenes/picBatch1/BocatomaCampoGrande.jpg")',
    'url("../Imagenes/picBatch1/Arriero1.jpg")',
    'url("../Imagenes/picBatch1/gansos1.jpg")', 
    'url("../Imagenes/picBatch1/Dique2.png")'
]

let indice_actual = 0;

function cambioBackgroundM() {
    const backgroundDiv = document.getElementById('background');
    backgroundDiv.style.backgroundImage = fondos[indice_actual];
    indice_actual = (indice_actual + 1) % fondos.length;
}

function cambioBackground() {
    setInterval(cambioBackgroundM, 5000); // Cambia cada 5 segundos
    window.onload = cambioBackgroundM;
}

/* ------------ FUNCIONES PARA EL FORMULARIO ------------ */

function validar_formulario() {
    nombreCompleto = document.getElementById('nombre')
    lugar = document.getElementById('lugar')
    email = document.getElementById('email')

    boolFecha = validarFecha()
    boolNombre = validarNombre(nombreCompleto)
    boolLugar = validarLugar(lugar)
    boolEmail = validarEmail(email)
    boolSelect = validarSelect()

    if (boolFecha && boolNombre && boolLugar && boolEmail && boolSelect) {
        setTimeout(() => { alert('¡El registro de sus datos ha sido un éxito!') }, 100)

            document.querySelector('elFormulario').reset()
    }
}

function validarSelect() {
    let select = document.getElementById('selectProyecto')
    let selectValue = select.value 
    let respuesta
    if (selectValue != "") {
        verificarBottomBorder(select)
        respuesta = true
    } else {
        darErrorBottomBorder(select)
        respuesta = false
    }   
    return respuesta
}
 
function getFechaActual() {
    let hoy = new Date();
    let dd = String(hoy.getDate()).padStart(2, '0');
    let mm = String(hoy.getMonth() + 1).padStart(2, '0');
    let yyyy = hoy.getFullYear();

    let cadena = `${yyyy}-${mm}-${dd}`
    return cadena
}

function validarFecha() {
    let hoy = new Date()
    let fecha = document.getElementById('fecha')
    
    let fechaIngresada = fecha.value
    let objFecha = new Date(fechaIngresada)
    let fechaActual = getFechaActual()
    let anioMaximo = hoy.getFullYear() + 2

    let resultado
    if (fechaIngresada != "" && fechaIngresada > fechaActual && objFecha.getFullYear() < anioMaximo) {
        verificarBottomBorder(fecha)
        resultado = true
    } else {
        darErrorBottomBorder(fecha)
        resultado = false
    }
    return resultado
}

function validarNombre(objeto) {
    let valor = objeto.value
    let resultado
    if (esCadenaDeTexto(valor) && valor != "") {
        verificarBottomBorder(objeto)
        resultado = true
    } else {
        darErrorBottomBorder(objeto)    
        resultado = false
    }
    return resultado
}

function esCadenaDeTexto(valor) {
    let expresion = /^[A-Za-z]+(?: [A-Za-z]+)+$/
    return expresion.test(valor)
}

function validarLugar(lugar) {
    let valorLugar = lugar.value
    let expresion = /^[A-Za-z0-9\s]{7,}$/
    let validar = expresion.test(valorLugar)
    let resultado
    if (validar && valorLugar != "") {
        verificarBottomBorder(lugar)
        resultado = true
    } else {
        darErrorBottomBorder(lugar)
        resultado = false
    }
    return resultado
}

function validarEmail(email) {
    let valor = email.value
    let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let verificar = expresion.test(valor);
    let resultado
    if (verificar && valor != "") {
        verificarBottomBorder(email)
        resultado = true
    } else {
        darErrorBottomBorder(email)
        resultado = false
    }
    return resultado
}

/* TODOS LOS EFECTOS VISUALES PARA LA VERIFICACION DEL FORMULARIO */

function verificarBottomBorder(elemento) {
    elemento.style.borderBottom = "2px solid green"
}

function darErrorBottomBorder(elemento) {
    elemento.style.borderBottom = "2px solid rgb(208, 2, 2)";
}