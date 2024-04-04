export class Presupuesto {
    constructor(dato, divPadre) {
        this.dato = dato;
        this.divPadre = divPadre ?? document.querySelector(".resumen-compra");
        this.orden = `<h3>Resumen de Compra</h3>
                    <div class="avatarProfesional">
                        <img class="img_Profesional" src="img/NoAvatar.png" alt="Foto del Profesional">
                        <h4>${dato.professional.lastname}, ${dato.professional.name}<br>${dato.professional.rating} stars</h4>
                    </div>
                    <p>Servicio: ${dato.professional.profession}</p>
                    <p>Visita: 30/03/24</p>
                    <p>Precio: ${dato.price}</p>`;
    }

    mostrarPresupuesto() {
        const front = document.createElement('div');
        front.innerHTML = this.orden;
        this.divPadre.append(front);
    }
}

















// const resumen_compra = document.querySelector(".resumen-compra")


// export class Presupuesto{

//     constructor(dato,divPadre) {
//         this.dato=dato,
//         this.divPadre = divPadre??resumen_compra,
//         this.orden = `<h3>Resumen de Compra</h3>
//                     <div class="avatarProfesional">
//                         <img class="img_Profesional" src="img/NoAvatar.png" alt="Foto del Profesional">
//                         <h4>${dato.name}<br>5 stars</h4>
//                     </div>
//                     <p>Servicio: ${dato.company.name}</p>
//                     <p>Visita: 30/03/24</p>
//                     <p>Precio: $10000,-</p>`;

//             // "id":dato.id,
//             // "avatar": "img/NoAvatar.png",
//             // "name":dato.name,
//             // "rating":"5 estrellas",
//             // "servicio":dato.company.name,
//             // "visita":"30/03/24",
//             // "price":"$10000,-",


//             // "id":dato.id,
//             // "avatar":dato.professional.avatar ?? "img/NoAvatar.png",
//             // "name":dato.name,
//             // "rating":dato.professional.rating ?? "5 estrellas",
//             // "descriptionProfessional": dato.descriptionProfessional ?? "Envío presupuesto por servicio, no incluye materiales",
//             // "servicio":dato.professional.profession ?? "varios",
//             // "visita":dato.fecha ?? "29/03/24",
//             // "price":dato.price ?? "$10000,-",
           
//     }
    
   
//     mostrarPresupuesto(){
//         const front = document.createElement('div');
//         front.innerHTML= this.orden;
//         this.divPadre.append(front);
//         // const h3 = document.createElement('h3');
//         //     h3.innerText = "Resumen de Compra";
//         // const div = document.createElement('div');
//         //     div.className = "avatarProfesional";
//         //     const img = document.createElement('img');
//         //         img.className = "img_Profesional";
//         //         img.src=this.orden.avatar;
//         //         img.alt="Foto del Profesional";
//         //     const h4 = document.createElement('h4');
//         //         h4.innerText=this.orden.name;
//         //     div.append(img, h4);
//         // const p1 = document.createElement('p');
//         //     p1.innerText ="Servicio: "+this.orden.servicio;
//         //     console.log(p1);
//         // const p2 = document.createElement('p');
//         //     p2.innerText ="Visita: "+this.orden.visita;
//         //     console.log(p2);
//         // const p3 = document.createElement('p');
//         //     p3.innerText ="Precio: " + this.orden.price;
//         //     console.log(p3);
        
//             // this.divPadre.append(h3,div,p1,p2,p3); 
        
//         return this.divPadre; 
//     }
    
//     searchOrder = async(idOrder) =>{

//         const url = "https://jsonplaceholder.typicode.com/users";

//         const response = await fetch(`${url}/${idOrder}`)
//         //Método para manejar promesa con patrón builder
//             .then((response)=>response.json())
//             .then((json) => {Presupuesto.mostrarPresupuesto(json)})
                 
//             .catch((error)=>{new cartelAviso('Ups!! algo salió mal, intenta más tarde', 'h2')});

//     }

//     updatedOrder = async(idOrder) =>{
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${idOrder}`, {
//             method: 'PATCH',
//             body: JSON.stringify({
//             title: 'aceptado',/*deberia ser para estado*/
//             }),
//             headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//             .then((response) => response.json())
//             .then((json) => console.log(json));
//         //y falta que dirija a la plataforma de pago que corresponda y luego del pago debería llevar a una página de confirmación de pago
//         //si esto no es así, por ejemplo que no debería haber forma de pago aquí sólo falta que dirija a página de orden aceptada
//     }





//     // static info(){
//     //     const datosPresupuesto =  `<h3>Resumen de Compra</h3>
//     //     <div class="avatarProfesional">
//     //         <img class="img_Profesional" src="${dato.professional.avatar}" alt="Foto del Profesional">
//     //         <h4>${dato.name}<br>5 stars</h4>
//     //     </div>
//     //     <p>Servicio: ${dato.professional.profession}</p>
//     //     <p>Visita: ${dato.fecha}</p>
//     //     <p>Precio: ${dato.price}</p>`
//     //     return datosPresupuesto;
           
        
//     // }

    
// }