"use strict"
//campo minato 
//L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l’utente clicca su ogni cella, 
//la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.



const gridContainer = document.querySelector(".grid-container")

for(let i=0; i<100; i++){
    const square = document.createElement("div");
    square.classList.add("grid-square");

    square.addEventListener("click", onSquareClick) //dichiaro la funzione onclick..






    gridContainer.append(square);
}


//invoco la la funzione onClick fuori del ciclo for 
function onSquareClick ( ) {
    this.classList.toggle("bg-primary"); 
}

