import { Util } from './Util.js';
import { Ordenes } from './vista_crear_orden/js/Ordenes.js';

Util.existLogin();

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

const orden = new Ordenes(Util.reuperarLogin(),'.contenidoRecuadro');
orden.agregarAlFront();
