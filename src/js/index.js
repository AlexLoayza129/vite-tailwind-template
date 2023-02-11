/**
 * A partir de aqui puedes escribir codigo JS personalizado
 * Si deseas importar otros modulos que sean debajo de la linea 1
 * @example => import 'newmodule.js';
 */

import './autoslider';
import { tns } from './tiny-slider';

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Utilizando tiny slider para el carousel de partners *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const partnerCarousel = document.getElementsByClassName("partner-carousel");
const serviceCarousel = document.getElementsByClassName("service-carousel")

//? Validando que en las otras paginas exista el carousel
//? Si en caso existiera ejecuta el script </>

if(partnerCarousel.length !== 0){
    let slider = tns({
        "container": ".partner-carousel",
        "items": 2,
        "center": true,
        "gutter": 20,
        "mode": "carousel",
        "mouseDrag": true,
        "swipeAngle": false,
        "speed": 300,
        "autoplay": true,
        "autoplayHoverPause": false,
        "autoplayTimeout": 3500,
        "controls": false,
        "controlsText": false,
        "autoplayButton": false,
        "autoplayButtonOutput": false,
        "responsive": {
            "640": {
                "items": 5
            }
        }
    });
}

if(serviceCarousel.length !== 0){
    let slider = tns({
        "container": ".service-carousel",
        "items": 1,
        "center": true,
        "mode": "carousel",
        "mouseDrag": true,
        "swipeAngle": false,
        "speed": 300,
        "autoplay": true,
        "autoplayHoverPause": false,
        "autoplayTimeout": 4000,
        "controls": false,
        "controlsText": false,
        "autoplayButton": false,
        "autoplayButtonOutput": false,
        "responsive": {
            "640": {
                "items": 3
            }
        }
    });
}

