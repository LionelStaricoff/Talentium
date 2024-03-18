import { cartelAviso } from './cartel_aceptar_cancelar/cartelAviso.js';

export class Util {

    static esPromesa(variable) {
        return Promise.resolve(variable) instanceof Promise;
    }

    static guardarSesionStorage(nombre, dato, padre) {
        try {
            const datoParce = JSON.stringify(dato);
            // console.log('datoParce: '+ datoParce);
            sessionStorage.setItem(nombre, datoParce);
        } catch (error) {
            new cartelAviso('Error al guardar el usuario', padre);

        }
    }


    static recuperarSesionStorage(nombre, padre) {
        try {
            const recuperarUsuario = sessionStorage.getItem(nombre);
            //console.log('recuperarUsuario: '+ recuperarUsuario);
            return recuperarUsuario;
        } catch (error) {
            new cartelAviso('error al recuperar el usuario', padre);

        }
    }

    static guardarUsuario(dato, padre) {
        Util.guardarSesionStorage('usuario', dato, padre);
    }


    static reuperarUsuario(padre) {
        return Util.recuperarSesionStorage('usuario', padre);
    }

    static guardarAuthorization(dato , padre) {
        try {
            let dat = dato ?? null;
            if(dat !== null ) sessionStorage.setItem('Authorization', dato);
        } catch (error) {
            new cartelAviso('error al guardar el usuario', padre);

        }
    }


    static reuperarAuthorization(padre) {
        return Util.recuperarSesionStorage('Authorization', padre);
    }

    static guardarLogin(dato, padre) {
        try {
            sessionStorage.setItem('cliente',JSON.stringify(dato));
        } catch (error) {
            new cartelAviso('error al guardar el usuario', padre);

        }
    }

    static reuperarLogin(padre) {
        return JSON.parse( Util.recuperarSesionStorage('cliente', padre) );
    }

    static cliente() {
        return {
            "clienteId": 1,
            "name": "Juan40",
            "lastname": "perez",
            "dni": "77234567",
            "rating": 1,

            "user": {
                "id": 48,
                "email": "email25@emails47.com",
                "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png",
            },

            "direction": {
                "street": "calle 1",
                "number": "258",
                "province": "chaco",
                "location": "montaña"
            }

        }
    }
    p
    static profesional() {
        return {
            "id": 10,
            "name": "Puan",
            "lastname": "perez",
            "cuit": "20-77234567-0",
            "cbu": "20772345670",
            "rating": 5,
            "profession": "ELECTRICIAN",


            "direction": {
                "street": "calle falsa",
                "number": "123",
                "province": "chaco",
                "location": "lago"
            },

            "user": {
                "id": 133,
                "email": "emai555@emails.com",
                "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png",
            }

        }
    }
    static orden() {
        return {
            "id": 1,
            "description": "nueva orden 5",
            "profecional": 1,
            "precio": 0.00,
            "fecha": "",
            "estado": "INICIAL",
            "cliente_id": 15
        }
    }
    static cambiarDePagina(pageUrl) {
        window.location.href = pageUrl;
    }

   static existLogin(){
  
   if( Util.reuperarLogin() === null) Util.cambiarDePagina('index.html');
   }
}











