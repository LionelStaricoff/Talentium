import { Util } from './Util.js'
import { cartelAviso } from './cartel_aceptar_cancelar/cartelAviso.js';
import { Professional } from './conexiones/Professional.js';


//try {

Util.existLogin();

//saludo al usuario
const saludo = document.querySelector('span');
saludo.innerText =  Util.reuperarLogin().name?? 'usuario';

const inputs = document.querySelectorAll('input');
inputs[2].value = Util.reuperarLogin().name;
inputs[3].value = 'XXXXXXX';
inputs[4].value = Util.reuperarLogin().cuit;


//guardar pagina actual para poder volver con la flecha
const buttons = document.querySelectorAll('li');
buttons.forEach(li => li.addEventListener('click', () => Util.guardarPaginaActual()));

const volverbutton = document.querySelector('.volver');
volverbutton.addEventListener('click', () => Util.volverUltimaPagina());

if (Util.reuperarImagen() !== null) {
    const imagen = Util.reuperarImagen();

    const logoUser = document.querySelector('#logoUser');
    logoUser.src = imagen;
}

const cerrarSesion = document.querySelector('.cerrar');
cerrarSesion.addEventListener('click', () => Util.borrarSession());



const especialidad = document.querySelector('#especialidad');
const actualizarPerfil = document.querySelector('.boton_centrado');

actualizarPerfil.addEventListener('click', () => {

    
    let professional = new Professional(Util.reuperarLogin().id, Util.reuperarLogin().name, Util.reuperarLogin().lastname, inputs[4].value,
        inputs[5].value,
        inputs[6].value, inputs[7].value, inputs[8].value, inputs[9].value, inputs[10].value, especialidad.value);

    professional.acrualizarProfessional();

});

/*
} catch (error) {
    new cartelAviso('Ups!! algo salio mal', 'h2');
}*/
