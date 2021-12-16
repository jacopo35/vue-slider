/*
Descrizione:
Partendo dal markup allegato, rifare lo slider ma questa volta usando Vue.
Bonus:
1 - al click su uno dei pallini mostrare l’immagine in posizione corrispondente;
2 - applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente;
3 - quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce.
*/


//utilizzo di VueJs
const app = new Vue(
 {
    el: '#app', //elemento da utilizzare
    data: {//dichiarare i dati da utilizzare
    images: [ //immagini da utilizzate
     'image1.jpg',
     'image2.jpg',
     'image3.jpg',
     'image4.jpg'
     ],
    counter: 0
    },
    methods: {//utilizzo delle funzioni avanti e indietro
    nextImg: function () {//funzione avanti
             this.counter += 1;
             if (this.counter > this.images.length - 1) {
                 this.counter = 0;
             }
            },
    prevImg: function () {//funzione indietro
             this.counter -= 1;
             if (this.counter < 0) {
             this.counter = this.images.length - 1;
             }
            }
        }
    }
)