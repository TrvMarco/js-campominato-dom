/* FUNZIONI: 
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

/*----------
  FUNCTION 
-----------*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

/*----------
    MAIN 
-----------*/
const playButton = document.getElementById("play-button");

playButton.addEventListener('click',
    function(){   
    const difficult = document.querySelector('#difficult')
    console.log(difficult.value) 
    let totalNumbers
    
    switch (difficult.value) {
        case "easy":
            totalNumbers = 100;
            break;
        case "medium":
            totalNumbers = 80;
            break;
        case "hard":
            totalNumbers = 50;    
            break; 
    }
    console.log(totalNumbers)
    
    let x = 0
    let number = 1
    while(x < totalNumbers){
        x++
        const container = document.querySelector(".container"); 
        const cellElement = document.createElement("div");
        cellElement.innerHTML = number
        cellElement.classList.add("cell")
        container.append(cellElement)
        number++
    }
 }
);


// const bombs = [];
// do{

// }while(bombs.length < 16)