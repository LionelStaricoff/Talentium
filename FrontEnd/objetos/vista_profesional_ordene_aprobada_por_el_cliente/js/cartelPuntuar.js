export class CartelPuntuar {
    constructor(ordenDto, divPadre) {
        this.orden = ordenDto;
        this.divPadre = divPadre ?? 'main';
        this.rating;
        this.div;
    }

    crearCartel() {

        this.div = document.createElement('div');
        this.div.className = 'containerRating';
        this.div.innerHTML=`
        <div class="info">
            <div class="emoji"></div>
            <div class="status"></div>
        </div>
        <div class="stars">
            <div class="star" data-rate="5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                </polygon>
            </svg>
            </div>
            <div class="star" data-rate="4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                </polygon>
            </svg>
            </div>
            <div class="star" data-rate="3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                </polygon>
            </svg>
            </div>
            <div class="star" data-rate="2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                </polygon>
            </svg>
            </div>
            <div class="star" data-rate="1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                </polygon>
            </svg>
            </div>
        </div>                        
                            `

        return this.div;

    }

    agregarALFront() {
        const padre = document.querySelector(this.divPadre);
        padre.appendChild(this.crearCartel());

       

    /*-------Funcionalidades del cartelPuntuar-------*/


        const stars = document.querySelectorAll(".star");
        const emojiEl = document.querySelector(".emoji");
        const statusEl = document.querySelector(".status");
        const defaultRatingIndex = 0;
        let currentRatingIndex = 0;
        
        const ratings = [
        { emoji: "", name: "Tu opinión nos interesa  <br> ¿Cómo fue tu experiencia?" },
        { emoji: "😔", name: "Mala" },
        { emoji: "🙁", name: "Regular" },
        { emoji: "🙂", name: "Buena" },
        { emoji: "🤩", name: "Muy buena" },
        { emoji: "🥰", name: "¡Excelente!" }
        ];
        
        const checkSelectedStar = (star) => {
        if (parseInt(star.getAttribute("data-rate")) === currentRatingIndex) {
            return true;
        } else {
            return false;
        }
        };
        
        const setRating = (index) => {
        stars.forEach((star) => star.classList.remove("selected"));
        if (index > 0 && index <= stars.length) {
            document
            .querySelector('[data-rate="' + index + '"]')
            .classList.add("selected");
        }
        emojiEl.innerHTML = ratings[index].emoji;
        statusEl.innerHTML = ratings[index].name;
        };
        
        const resetRating = () => {
        currentRatingIndex = defaultRatingIndex;
        setRating(defaultRatingIndex);
        };
        
        stars.forEach((star) => {
            star.addEventListener("click", () => { // Cambio aquí
                if (checkSelectedStar(star)) {
                    resetRating();
                    return;
                }
                const index = parseInt(star.getAttribute("data-rate"));
                currentRatingIndex = index;
                setRating(index);
                this.puntuar(index); // Cambio aquí
            });
            
            star.addEventListener("mouseover", function () {
                const index = parseInt(star.getAttribute("data-rate"));
                setRating(index);
            });
            
            star.addEventListener("mouseout", function () {
                setRating(currentRatingIndex);
            });
            });
            
            document.addEventListener("DOMContentLoaded", function () {
            setRating(defaultRatingIndex);
        });
    
    

/*-------fin funcionalidades cartel-------*/

    }

    cerrar(hijo) {
        const padre = hijo.parentNode;
        padre.removeChild(hijo);
    }

    puntuar(estrellas) {

        this.rating = estrellas;

        this.orden.orderstatus = 'FINALIZADA';
        console.log(this.orden);

        const clientePuntuado = {
            'id': this.orden.cliente_id,
            "rating": this.rating,
        }
        console.log(clientePuntuado);

        const profesionalDto = {
            'id': this.orden.profecional,
            "wallet": this.orden.precio
        }
        console.log(profesionalDto);

        this.cerrar(this.div);
    }

}



