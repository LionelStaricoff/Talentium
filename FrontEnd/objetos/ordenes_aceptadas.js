import { Util } from './Util.js'
import { Ordenes } from './conexiones/Ordenes.js';

Util.existLogin();

if (Util.reuperarImagen() !== null) {
    const imagen = Util.reuperarImagen();

    const logoUser = document.querySelector('#logoUser');
    logoUser.src = imagen;
}

const volverbutton = document.querySelector('#volverbutton');
volverbutton.addEventListener('click', () => Util.volverUltimaPagina());


const ordenes = new Ordenes(Util.reuperarLogin());
ordenes.listarTodasLasOrdenes('.contenidoRecuadro');

const cerrarSesion = document.querySelector('.cerrar');
cerrarSesion.addEventListener('click', () => Util.borrarSession());