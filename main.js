"use strict"
//campo minato 
//L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l’utente clicca su ogni cella, 
//la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.



const squareCountsSelect = document.querySelector("[name='squareCounts']");
const BtnStart =document.querySelector("#btn-start");
const GridContainer = document.querySelector(".grid-container");


BtnStart.addEventListener("click", function({}){         // al click sul pulsante
  const squareCounts = parseInt(squareCountsSelect.value);// leggo il contenuto della select (squareCountsSlelect)

  console.log("valore scelto", squareCounts);

  for(let i = 0; i < squareCounts; i++){     //faccio un ciclo in base al numero scelto dal l'utente
    
    const square = document.createElement("div"); // creo l'elemento html
    const squaresPerRow = Math.sqrt(squareCounts);//  quanto quadrati inseriti per riga

    square.classList.add("grid-square");   // aggungo ad al square la classe +
    square.textContent = i.toString();                   // +il contenuto 
    square.style.flexBasis =`calc(100% / ${squaresPerRow})`;

    square.addEventListener("click", function( ){     //+ l'evento 
      square.classList.toggle("bg-success");          // la classe 

    });

    GridContainer.append(square);
    

  }
});
