// * numero di chilometri che vuole percorrere e l'età del passeggero.
let  userkilometers = document.getElementById('user-kilometers');

let userAge = document.getElementById('user-age');

const button = document.querySelector('button');


// ! calcolo prezzo biglietto
let kmPrice = Math.floor( userkilometers * 0.233);

//? Sconto del 20% per i minorenni
const underagediscount = Math.floor (kmPrice - (( 19.4 / 100)* kmPrice));

//TODO Sconto del 40% per chi ha più di 65 anni
const majordiscount = Math.floor (kmPrice - (( 37.7 / 100)* kmPrice));



button.addEventListener('click', function(){
    alert ('ENJOY');
    //if(userAge < 18){
        //console.log('You are young');
        
        //document.getElementById('ticket-price') .innerHTML = Number.parseFloat(underagediscount).toFixed(2) + '€      Have a nice trip! ' ;
        //document.getElementById('discount') .innerHTML = 'The underage discount has been applied';
    })
