/*
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/

// 1. Creare funzione per generare numeri casuali da 1 a 100 --ok
// 2. Eseguire il controllo che i numeri non siano duplicati  --ok
// 3. Chiedo all'utente di inserire (100-16) volte un numero tra 1 e 100 --ok
// 4. Controllo che i numeri inseriti dall'utente non si ripetono  --ok
// 5. SE il numero è nella lista generata dal programma termina la partita --ok
//    ALTRIMENTI continuo a chiedere al giocatore di inserire altri numeri --ok 
// LA PARTITA TERMINA QUANDO IL GIOCATORE METTE UN NUMERO SCELTO DALLA CPU O DAL MASSIMO DELLE VOLTE POSSIBILI PER INSERIRE I NUMERI --ok 
// 6. Comunico il punteggio, ovvero il numero di volte che è stato inserito un numero consentito


/*----------
  FUNCTION 
-----------*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

/*----------
  MAIN 
-----------*/
let level;
let totalNumbers;
do{
    level = Number(prompt("Scegliere difficolta: facile = 0 , medio = 1, difficile = 2."));
}while(isNaN(level) || level < 0 || level > 2)

if(level === 0){
    totalNumbers = 100;
}else if(level === 1){
    totalNumbers = 80;
}else{
    totalNumbers = 50;
}

const cpuNumbers = []; 
while(cpuNumbers.length < 16){  //16
    let randomNumber = getRndInteger(1,totalNumbers);
    if(!cpuNumbers.includes(randomNumber)){
        cpuNumbers.push(randomNumber);
    }
}
console.log(cpuNumbers);

const userNumbersList = [];
let brokenNumber = false;
while( userNumbersList.length < 5 && brokenNumber == false){  //84   
    let userNumbers;
    do {
        userNumbers = Number(prompt("Inserisci un numero da 1 a 100"));
    }while(isNaN(userNumbers) || userNumbers < 1 || userNumbers > 100)

    if(userNumbers >= 1 && userNumbers <= 100 && !userNumbersList.includes(userNumbers)){
        for (let j = 0; j < cpuNumbers.length; j++){
            if(userNumbers === cpuNumbers[j]){
                brokenNumber = true
                console.log("Hai perso! il tuo punteggio è", userNumbersList.length)
            }
        }
        userNumbersList.push(userNumbers)
    }
}

if(userNumbersList.length == 5){
    console.log("HAI VINTO!!")
}



/* BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50 */
// const difficult = prompt("Scegliere difficolta: facile, medio, difficile")
// let maxValue; 
// let difficultFunction; 

// if(difficult == "facile"){
//     difficultFunction = getRndInteger(1,100);
//     maxValue = 100;
// }else if( difficult == "medio"){
//     getRndInteger(1,80);
//     maxValue = 80;
// }else{
//     getRndInteger(1,50);
//     maxValue = 50;
// }



/* CORREZIONE:

FUNZIONI: 
Math random min max


MAIN: 
- Array "bombs" vuoto 
- Ciclo while finche array bombs < 16 usando funzione, controllo che non sia inserito con un if e pusho 
- Ciclo while (prima creo variabile per "bomba esplosa" = false), condizioni ciclo: finchè bomba expl è falsa entro nel ciclo,  e numero array utente è minore di 84
    faccio prompt number di inserire numero  (per verifica dentro un do while con isnan number || numero <1 || usernumber  >100 )
    SE array bombs contiene il numero che ha inserito l'utente cambio valore di bomba esplosa e faccio terminare il gioco 
    ALTRIMENTI SE l'utente ha gia messo il numero glie lo comunico con un alert 
    ALTRIMENTI pusho array(da creare) dei numeri inserriti da utente
- SE bomba è esplosa alert con hai perso il tuo punteggio è {arrray.lengh}
  ALTRIMENTI hai vinto 


BONUS: 
costante level con numberprompt da 0 a 2 dentro un do, con while per validare che ci sia dentro isnan level, e se level < 0 || level > 2 
SE level === 0 cambia variabile numeri totali 
ALTRIMENTI SE ===1 etc */ 