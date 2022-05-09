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
// 3. Chiedo all'utente di inserire (100-16) volte un numero tra 1 e 100
// 4. Controllo che i numeri inseriti dall'utente non si ripetono 
// 5. SE il numero è nella lista generata dal programma termina la partita
//    ALTRIMENTI continuo a chiedere al giocatore di inserire altri numeri
// LA PARTITA TERMINA QUANDO IL GIOCATORE METTE UN NUMERO SCELTO DALLA CPU O DAL MASSIMO DELLE VOLTE POSSIBILI PER INSERIRE I NUMERI
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
let cpuNumbers = []; 

while(cpuNumbers.length < 16){
    let randomNumber = getRndInteger(1,100);
    if(!cpuNumbers.includes(randomNumber)){
        cpuNumbers.push(randomNumber);
    }
}
console.log(cpuNumbers);

const userNumbersList = []
let i = 0
while(i < 5) {
    i++ 
    const userNumbers = Number(prompt("Inserisci un numero da 1 a 100"));
    if(userNumbers >= 1 && userNumbers <= 100){
        userNumbersList.push(userNumbers)
    }
}

console.log(userNumbersList);

