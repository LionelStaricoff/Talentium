import { Util } from './Util.js';
import { Ordenes } from './conexiones/Ordenes.js';
import { OrdenesClientes } from './conexiones/Ordenes.js';
import {datos} from './vista_profesional_listar_ordenes/js/Datos.js';

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
/*
const ordenes = new Ordenes(Util.reuperarLogin());
ordenes.listarPorIdDelClient();*/



for(let i=0; i<15; i++){
    const nuevaOrden = new OrdenesClientes(datos.orden(), datos.profesional(),'.contenidoRecuadro');
    nuevaOrden.agregarAlFront();
    }
    


const cerrarSesion = document.querySelector('.cerrar');
cerrarSesion.addEventListener('click', () => Util.borrarSession());