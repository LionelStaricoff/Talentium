import { Util } from './Util.js'
import { cartelAviso } from './cartel_aceptar_cancelar/cartelAviso.js';
import { Professional } from './conexiones/Professional.js';


try {

   // Util.existLogin();

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


    const inputs = document.querySelectorAll('input');
    const crearPerfil = document.querySelector('#crearPerfil');

    crearPerfil.addEventListener('click', () => {


        let user =1// Util.reuperarLogin();
    
        let professional = new Professional(inputs[2].value, inputs[3].value, inputs[4].value,
            inputs[5].value, user,
            inputs[6].value, inputs[7].value, inputs[8].value, inputs[9].value,inputs[10].value,inputs[11].value);
            new cartelAviso(professional, 'h2');
            //professional.conexionApi();

    });


} catch (error) {
    new cartelAviso('Ups!! algo salio mal', 'h2');
}
