import { User } from './conecciones/user.js';
import { cartelAviso } from './cartel_aceptar_cancelar/cartelAviso.js';
import { Util } from './Util.js';


const registrarse = document.querySelector('.login_button');

registrarse.addEventListener('click', async (event) => {
  event.preventDefault();
  const inputs = document.querySelectorAll('input');



  if (inputs[0].value != '' && inputs[1].value != '') {

    const userCreado = new User(inputs[0].value, inputs[1].value, inputs[2].value);




    let respuesta = await userCreado.conexionApi();
  
    if(respuesta == null) new cartelAviso('Lo siento, algo salió mal, vuelve más tarde a intentarlo');


    if (respuesta != null) Util.guardarUsuario(respuesta);
    
    if (respuesta != null) registrarse.href = "invitaAregistrar.html";

     
    //alert(Util.reuperarAuthorization());

  } else {
    new cartelAviso('Los campos usuario y contraseña no deben estar vacíos')

  }

});







