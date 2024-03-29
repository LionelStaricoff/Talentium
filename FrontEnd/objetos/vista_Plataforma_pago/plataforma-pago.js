// import { Presupuesto } from './presupuesto.js'

const resumen_compra = document.querySelector(".resumen-compra");
const btnContinuar = document.querySelector(".boton_centrado");


const searchOrder = async(idOrder) =>{

        const url = "https://jsonplaceholder.typicode.com/users";

        const response = await fetch(`${url}/${idOrder}`)
        //Método para manejar promesa con patrón builder
            .then((response)=>response.json())
            .then((json) => {const data = `<h3>Resumen de Compra</h3>
            <div class="avatarProfesional">
               <img class="img_Profesional" src="img/NoAvatar.png" alt="Foto del Profesional">
               <h4>${json.name}<br>5 stars</h4>
           </div>
           <p>Servicio: ${json.company.name}</p>
           <p>Visita: 30/03/24</p>
           <p>Precio: $10000,-</p>`;
            resumen_compra.innerHTML = data;    })
                // const data = Presupuesto.mostrarPresupuesto(json)
                 
            .catch((error)=>{new cartelAviso('Ups!! algo salio mal, intenta más tarde', 'h2')});



}

searchOrder(4);//acá debo pasar id de la orden



const updatedOrder = async(idOrder) =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'aceptado',/*deberia ser para estado*/
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      //y falta que dirija a la plataforma de pago que corresponda y luego del pago debería llevar a una página de confirmación de pago
      //si esto no es así, por ejemplo que no debería haber forma de pago aquí sólo falta que dirija a página de orden aceptada
}
btnContinuar.addEventListener('click', updatedOrder);





/*
const data = `<h3>Resumen de Compra</h3>
                                         <div class="avatarProfesional">
                                            <img class="img_Profesional" src="img/NoAvatar.png" alt="Foto del Profesional">
                                            <h4>${json.name}<br>5 stars</h4>
                                        </div>
                                        <p>Servicio: ${json.company.name}</p>
                                        <p>Visita: 30/03/24</p>
                                        <p>Precio: $10000,-</p>`;
                            resumen_compra.innerHTML = data; */
/*
//Método para manejar promesa con async/await
const fetchdata = async()=>{

try {
        
        const endPoint = "https://jsonplaceholder.typicode.com/users";
        const response = fetch(endPoint);
        if(!response.ok){
            throw new Error("Ups!! ocurrió un error");}
        const data = await response.json();
        console.log(data);
    } catch (e) {
            console.log(e.message);
    }
};

fetchdata();
*/









/*
const datos_order= [
    {
        id: 1,
        price: 10000,
        servicio: electricista,
        date: "30/03/24",
        professional: {
                id:2,
                avatar: "img/NoAvatar.png",
                name: "Gerónimo",
                lastname: "Antunes",
                rating: 5,
            },
    }

    {
        id: 2,
        price: 10000,
        servicio: plomero,
            date: "30/03/24",
            professional: {
                id:2,
                avatar: "img/NoAvatar.png",
                name: "Juan",
                lastname: "Santos",
                rating: 5,
        },
    },

    {
        id: 3,
        price: 10000,
            date: "28/03/24",
            professional: {
                id:2,
                avatar: "img/NoAvatar.png",
                name: "Pedro",
                lastname: "Escobar",
                rating: 5,
            },
    }
]


//Para hacerlo asincrónico
 const getDatos = () =>{
    return new Promise((resolve,reject)=>{
        if(datos_order.lenght===0){
            reject(new Error('No existen datos'))
        }
        setTimeout(
            ()=>{resolve(datos_order)},
            1500
        );    
    })
 
}

getDatos()
    .then((datos) =>{
        const ordenes = data.map((order)=> {
                                        `<h3>Resumen de Compra</h3>
                                         <div class="avatarProfesional">
                                            <img class="img_Profesional" src="${datos.professional.avatar}" alt="Foto del Profesional">
                                            <h4>${datos.professional.lastname}, ${datos.professional.name}</h4>
                                            <h4>${datos.professional.rating}</h4>
                                         </div>
                                        <p>Servicio: ${datos.servicio}</p>
                                        <p>Fecha Visita: ${datos.date}</p>
                                        <p>Precio: ${datos.price}</p>`})
        resumen_compra.innerHTML(ordenes);
           
      

    })*/
/*
async function fetchingData(){
    try {
        const datos =  await getDatos(); 
        console.log(datos);
    } catch (error) {
        console.log(error.message)
        
    }
    
}

fetchingData();

*/

/*export class pago {
    constructor(datoOrden,profesionalDto,divPadre){
        this.datos=datoOrden;
        this.idOrden=datos.id;
        this.fecha;
        this.precio=dato.precio;
        this.profesional=profesionalDto;
        this.datoProfesional={
            "id":this.profesional.id,
            "avatar":this.profesional.user.avatar,
            "profesional":[this.profesional.name,this.profesional.lastname],
            "rating": this.profesional.rating,
        
        }

    }


conexionApi() {

    const url = `${Util.conexionBase()}/api/order`;
    const orderData = {
        id: this.id,
        price: this.price,
        date: this.date,
        professional: {
            id:this.id,
            avatar: this.avatar,
            name: this.name,
            lastname: this.lastname,
            rating: this.rating,
        }
        
    };

     fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer${Util.reuperarAuthorization()}`
        },
        body: JSON.stringify(orderData)
    })
        .then(response => response.json())
        .then(data => {
            resumen_compra.innerHTML(`<h3>Resumen de Compra</h3>
            <div class="avatarProfesional">
                <img class="img_Profesional" src="${orderData.professional.avatar}" alt="Foto del Profesional">
                <h4>${orderData.professional.lastname}, ${orderData.professional.name}</h4>
                <h4>${orderData.professional.rating}</h4>
            </div>
            <p>Servicio: ${orderData.professional.profession}</p>
            <p>Fecha Visita: ${orderData.date}</p>
            <p>Precio: ${orderData.price}</p>`)

        }
        
        ).catch(err => {
            new cartelAviso('Ups!! algo salio mal, intenta más tarde', 'h2');
        });

}
}}*/