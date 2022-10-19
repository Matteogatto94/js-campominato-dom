/* Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

/* Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione:
**nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. */


const button = document.querySelector('button');
const container = document.querySelector('.grid');
const result = document.querySelector('.results');


button.addEventListener ('click', function () {
    container.innerHTML = '';
    result.innerHTML = '';
    const gridcells = document.querySelector('.form-select').value;
    const bombs = generaBombe(gridcells);
    
    generaGriglia(container, gridcells, bombs, result);
    
});

function generaGriglia (whereGemerateGrid, howManycells, bombs, whereGenerateResult) {
   
for (let i = 1; i <= howManycells; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    const boxRow = Math.sqrt(howManycells);
    square.style.width = `calc(100% / ${boxRow})`;
    square.innerText = i;
    whereGemerateGrid.insertAdjacentElement('beforeend', square);
        
        
    square.addEventListener ('click', function () {
    
if(bombs.includes (Number(square.innerHTML))){
for (let i = 0; i < bombs.length; i++) {
    const bomb = bombs[i];
    const allSquare = document.querySelectorAll ('.square');
for (let j = 0; j < allSquare.length; j++) {
    const oneSquare = allSquare[j];
        oneSquare.style.pointerEvents = 'none';
                    
if(oneSquare.innerHTML == bomb) {
        oneSquare.classList.add ('bombs');
    const allSquareGreen = document.querySelectorAll ('.selected_boxes');
        whereGenerateResult.innerText = `Game Over. Your Score IS ${allSquareGreen.length}`; 
}
}  
}

} else{
        square.classList.add ('selected_boxes');
    const allSquareGreen = document.querySelectorAll ('.selected_boxes');
if (allSquareGreen.length == (howManycells-bombs.length)){
        whereGenerateResult.innerText = `You Win. Your Score IS ${allSquareGreen.length}`;
    const allSquare = document.querySelectorAll ('.square');
for (let j = 0; j < allSquare.length; j++) {
    const oneSquare = allSquare [j];
        oneSquare.style.pointerEvents = 'none';
}
}
}
                  
});
}
}




function generaBombe (max) {
    const bombs = [];
while (bombs.length !== 16) {
    const bomb = Math.floor (Math.random () * (max - 1)+1) + 1;
if (!bombs.includes (bomb)) {
        bombs.push (bomb);
}
}
return bombs
}