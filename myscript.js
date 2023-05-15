let inputkm = document.getElementById('user-kilometers');

let inputAge = document.getElementById('user-age');


const button = document.querySelector('button');

const underagediscount = Math.floor (kmPrice - (( 20 / 100)* kmPrice));

const majordiscount = Math.floor (kmPrice - (( 40 / 100)* kmPrice));

button.addEventListener('click', function(){
    if(userAge < 18){
        console.log('You are young');
        document.getElementById('ticket-price') .innerHTML = Number.parseFloat(underagediscount).toFixed(2) + '€      Have a nice trip! ' ;
        document.getElementById('discount') .innerHTML = 'The underage discount has been applied'
    }else if((userAge >= 18) && (userAge < 65)){
        console.log('You are adult');
        document.getElementById('ticket-price') .innerHTML = Number.parseFloat(kmPrice).toFixed(2) + '€  Have a nice trip!' ;
    }else if(userAge >=65){
        console.log('You are major');
        document.getElementById('ticket-price') .innerHTML = Number.parseFloat(majordiscount).toFixed(2) + '€  Have a nice trip! ' ;
        document.getElementById('discount') .innerHTML = 'The major discount has been applied'
    }else if (isNaN(userAge)|| isNaN(userkilometers)){
        console.log('ERROR');
    }

});

//?alert inputAge.value;
//?console.log(inputkm.value);
