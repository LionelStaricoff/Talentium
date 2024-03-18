import { cartelAviso } from '../cartel_aceptar_cancelar/cartelAviso.js';
import { Util } from '../Util.js';


export class User {
    constructor(emai, passwor, avata) {
        this.email = emai ?? NaN;
        this.password = passwor ?? NaN;
        this.avatar = avata ?? '';

    }
    conexionApi() {


        const url = 'http://localhost:8080/usuarios';
        const userData = {
            email: this.email,
            password: this.password,
            avatar: this.avatar
        };



        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(response => response.json())
            .then(data => {
                Util.guardarLogin(data);
                Util.guardarAuthorization(data.password);
                Util.cambiarDePagina('invitaAregistrar.html');
            }
            ).catch(err => {
                new cartelAviso('Ups!! algo salio mal, intenta más tarde', 'h2');
            });



    }

    login() {

        const url = 'http://localhost:8080/usuarios/login';
        const userData = {
            email: this.email,
            password: this.password
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(response => response.json())
            .then(data => {
                Util.guardarLogin(data);
          
                Util.guardarAuthorization(data.password);
             
                if (data.name === null) {
                    Util.cambiarDePagina('sitio_del_cliente.html');
                } else {

                    Util.guardarAuthorization(data.lastname);
                
                    Util.cambiarDePagina('invitaAregistrar.html');
                }
            }
            ).catch(err => {
                new cartelAviso('Ups!! algo salio mal, intenta más tarde');
            });
        /* buscando el jwt en el header
               for ([key, value] of response.headers.entries()) {
                   console.log("Clave: ", key, "valor: ", value);
                 }*/

    }
}
