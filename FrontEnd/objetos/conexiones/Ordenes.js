import { cartelAviso } from '../cartel_aceptar_cancelar/cartelAviso.js';
import { Util } from '../Util.js';


export class Ordenes {
    constructor(dato, divPadre) {
        this.datos = dato;
        this.textarea;
        this.divPadre = divPadre ?? '#front';

    }

    crearOrden() {
        const div = document.createElement('div');
        div.id = "CrearOrden";

        const textarea = document.createElement('textarea');
        textarea.name = "descripcion";
        textarea.placeholder = "orden";
        textarea.cols = "30";
        textarea.rows = "8";
        textarea.innerText = this.textarea ?? "";

        const button = document.createElement('button');
        button.innerText = "Crear";
        button.addEventListener('click', () => {
            //  console.log(this.datos);
            const textareaFront = document.querySelector('textarea');
            this.textarea = textareaFront.value;
            if (this.textarea !== '' && this.textarea !== undefined) {
                this.crearOrdenConexionApi();
                textareaFront.value = '';
            } else {
                new cartelAviso('El campo no puede estar vacío', 'h2');
            }

        });


        div.append(textarea, button);
        return div;
    }
    agregarAlFront() {
        const main = document.querySelector(this.divPadre);
        main.appendChild(this.crearOrden());
    }

    cerrarOrden(div) {
        const padre = div.parentNode;
        padre.removeChild(div);
    }

    crearOrdenConexionApi() {
        const url = `${Util.conexionBase()}/api/order`;
        const userData = {
            cliente_id: this.datos.id,
            description: this.textarea
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer${Util.reuperarAuthorization()}`
            },
            body: JSON.stringify(userData)
        }).then(response => response.json())
            .then(data => {
                if (data !== null) {
                    new cartelAviso('Pedido enviado', 'h2');
                } else {
                    throw new Error('No se puedieron guardar los datos de las ordenes');
                }
            }
            ).catch(err => {

                new cartelAviso('Ups!! algo salio mal, intenta más tarde', 'h2');
            });

    }

    listarPorIdDelClient(padreDto) {
        const url = `${Util.conexionBase()}/api/order/allbyid/${this.datos.id}`;
        const userData = {
            cliente_id: this.datos.id,
            description: this.textarea
        };

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer${Util.reuperarAuthorization()}`
            },

        }).then(response => response.json())
            .then(data => {
                if (data.content.length > 0 ) {
                    data.content.forEach(d => {
                        const nuevaOrden = new OrdenesClientes(d, padreDto);
                        nuevaOrden.agregarAlFront();
                    });                
               
                } else {
                    new cartelAviso('no hay ordenes creadas', 'h2');
                }
            }
            ).catch(err => {
                new cartelAviso('Ups!! algo salio mal, intenta más tarde', 'h2');

            });


    }
}




export class OrdenesClientes {
    constructor(datoOrden, divPadre) {
        this.datos = datoOrden;
        this.textarea;
        this.divPadre = divPadre ?? '#front';
        this.comentario = datoOrden.comentarios ?? "";
        this.description = datoOrden.description;
        this.precio;
        this.orden = {
            "id": 1,
            "profecional": NaN,
            "precio": NaN,
            "comentarios": this.comentario,
            "orderstatus": "PENDIENTE"

        }
    }

    crearOrden() {
        const div = document.createElement('div');
        div.classList.add("CrearOrden");

        this.textarea = document.createElement('textarea');
        this.textarea.name = "descripcion";
        this.textarea.placeholder = 'comentario';
        this.textarea.cols = "30";
        this.textarea.rows = "8";
        this.textarea.innerText = this.comentario;

        this.precio = document.createElement('input');
        this.precio.type = "number";
        this.precio.placeholder = '$$$';

        const button = document.createElement('button');
        button.innerText = "Crear";
        button.addEventListener('click', () => {

            this.orden.comentarios = this.textarea.value;
            this.orden.precio = this.precio.value;

            console.log(this.orden);

        });

        const buttonX = document.createElement('button');
        buttonX.innerText = "X";
        buttonX.addEventListener('click', () => {
            div.classList.remove('aceptarOrden');
            div.classList.add("CrearOrden");
        });

        const descripcionOrden = document.createElement('div');
        descripcionOrden.innerText = this.description;
        descripcionOrden.addEventListener('click', () => {
            div.classList.remove('CrearOrden');
            div.classList.add("aceptarOrden");
        });

        div.append(buttonX, this.textarea, /*this.precio,*/ button, descripcionOrden);
        return div;
    }
    agregarAlFront() {
        const main = document.querySelector(this.divPadre);
        main.appendChild(this.crearOrden());
    }
}