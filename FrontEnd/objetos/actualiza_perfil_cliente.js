import { Util } from './Util.js'

//Util.existLogin();

//guardar pagina actual para poder volver con la flecha
const buttons = document.querySelectorAll('li');
buttons.forEach(li => li.addEventListener('click', () => Util.guardarPaginaActual()));

const volverbutton = document.querySelector('#volverbutton');
volverbutton.addEventListener('click', () => Util.volverUltimaPagina());

if (Util.reuperarImagen() !== null) {
    const imagen = Util.reuperarImagen();

    const logoUser = document.querySelector('.logo');
    logoUser.src = imagen;
}

const cerrarSesion = document.querySelector('#cerrarSesion');
cerrarSesion.addEventListener('click', () => Util.borrarSession());