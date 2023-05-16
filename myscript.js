
//* Creo il bottone e l'evento subordinato al click
// ! Creo le vaiabili e le popolo con il valore insrito dall'utente
// ? Calcolo il prezzo pieno del biglietto
//? Creo la condizione per applicare lo sconto del 20% per i minorenni
 //TODO Creo la condizione per applicare lo sconto conto del 40% per chi ha più di 65 anni


const button = document.querySelector('button');


button.addEventListener('click', function(){
    
    let  userkilometers = parseInt(document.getElementById('user-kilometers').value) ;
    let userAge = parseInt (document.getElementById('user-age').value);

    let kmPrice =  userkilometers * 0.233;

    
    if (userAge < 18 ){
        kmPrice = (kmPrice - (( 19.4 / 100)* kmPrice));

    } else if (userAge >= 65){
        kmPrice = (kmPrice - (( 37.7 / 100)* kmPrice));
    }
    document.getElementById('ticket-price').innerHTML = 'The value of your journey is:' + kmPrice.toFixed(2) + ' €' ;
} )

