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

    static guardarAuthorization(dato, padre) {
        try {
            let dat = dato ?? null;
            if (dat !== null) sessionStorage.setItem('Authorization', dato);
        } catch (error) {
            new cartelAviso('error al guardar el usuario', padre);

        }
    }


    static reuperarAuthorization(padre) {
        return Util.recuperarSesionStorage('Authorization', padre);
    }

    static guardarLogin(dato, padre) {
        try {
            sessionStorage.setItem('cliente', JSON.stringify(dato));
        } catch (error) {
            new cartelAviso('error al guardar el usuario', padre);

        }
    }

    static reuperarLogin(padre) {
        return JSON.parse(Util.recuperarSesionStorage('cliente', padre));
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

    static existLogin() {
        if (Util.reuperarLogin() === null) Util.cambiarDePagina('index.html');
    }

    static existLoginClient() {
        Util.existLogin();
        const clientDb = Util.reuperarLogin();
        const VerificarclienteDB = clientDb.lastname ?? null;
        if ( VerificarclienteDB !== null) Util.cambiarDePagina('sitio_del_cliente.html');
    }


    static updateFileName() {
        const fileInput = document.getElementById('file-input');
        const fileNameContainer = document.getElementById('file-name-container');

        // Verificar si se seleccionó un archivo
        if (fileInput.files.length > 0) {
            // Mostrar el nombre del archivo seleccionado
            fileNameContainer.textContent = `Archivo: ${fileInput.files[0].name}`;

        } else {
            // Limpiar el contenido si no se seleccionó ningún archivo
            fileNameContainer.textContent = '';
        }
    }

    static guardarImagen64(input) {

        const fileInput = input;

        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onloadend = function () {

            const base64String = reader.result;
            Util.guardarImagen(base64String);
        }
        reader.readAsDataURL(file);
    }

    static guardarImagen(imagen) {
        sessionStorage.setItem('imagen', imagen);
    }


    static reuperarImagen() {
        return sessionStorage.getItem('imagen');
    }

    static volverUltimaPagina() {
        let ultimaPaginaVisitada = localStorage.getItem('ultimaPaginaVisitada');

        if (ultimaPaginaVisitada !== null) {
            window.location.href = ultimaPaginaVisitada;
        } else {
            window.location.href = 'index.html';
        }
    }

    static borrarSession() {
        sessionStorage.clear();
     
    }
}










