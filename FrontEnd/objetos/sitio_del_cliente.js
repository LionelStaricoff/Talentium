import {Util} from './Util.js'

if(Util.reuperarImagen() !== null){
const imagen = Util.reuperarImagen() ;

const logoUser = document.querySelector('#logoUser');
logoUser.src = imagen;
}