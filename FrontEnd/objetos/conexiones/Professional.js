import { Util } from '../Util.js';
import { cartelAviso } from '../cartel_aceptar_cancelar/cartelAviso.js';

export class Professional {
    constructor(nameDto, lastnameDto, cuitDto, phoneDto, street, number, province, location, cbuDto, especialidadDto) {
        this.name = nameDto;
        this.lastname = lastnameDto;
        this.cuit = cuitDto;
        this.phone = phoneDto;
        this.user = { "id": Util.reuperarUsuario() }
        this.direction = {
            "street": street,
            "number": number,
            "province": province,
            "location": location
        }
        this.cbu = cbuDto;
        this.especialidad = especialidadDto;
    }


     conexionApi() {

        const url = `${Util.conexionBase()}/api/professional`;
        const userData = {
            name: this.name,
            lastname: this.lastname,
            phone: this.phone,
            cuit: this.cuit,
            cbu: this.cbu,
            profession: this.profession,
            user: this.user.id,
            direction: this.direction
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
              
                Util.guardarLogin(data);
                Util.cambiarDePagina('sitio_del_cliente.html'); 
            }
            ).catch(err => {
                new cartelAviso('Ups!! algo salio mal, intenta más tarde', 'h2');
            });

    }
}

