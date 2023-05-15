// * numero di chilometri che vuole percorrere e l'età del passeggero.
let  userkilometers = document.getElementById('user-kilometers');

let userAge = document.getElementById('user-age');


// ! calcolo prezzo biglietto
let kmPrice =  userkilometers * 0.233;

const button = document.querySelector('button');





//? Sconto del 20% per i minorenni
const underagediscount = Math.floor (kmPrice - (( 19.4 / 100)* kmPrice));

//TODO Sconto del 40% per chi ha più di 65 anni
const majordiscount = Math.floor (kmPrice - (( 37.7 / 100)* kmPrice));



button.addEventListener('click', function(){
    const outputelement = document.querySelector ('pre');
    outputelement.innerHTML += " " +  userkilometers.value + userAge.value;

    if (userAge.value < 18){
        outputelement.classList.add('lightblue');
    } else if(userAge.value >=65){
        outputelement.classList.add('magenta');
    }

    

    //if(userAge < 18){
        //console.log('You are young');
        
        //document.getElementById('ticket-price') .innerHTML = Number.parseFloat(underagediscount).toFixed(2) + '€      Have a nice trip! ' ;
        //document.getElementById('discount') .innerHTML = 'The underage discount has been applied';
    })
