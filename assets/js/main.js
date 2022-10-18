/* Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */


const button = document.querySelector('button');
const container = document.querySelector('.grid');

button.addEventListener('click', function(){
    container.innerHTML= '';
    gridcells = document.querySelector('.form-select').value;
    generaGriglia(container, gridcells);  
});



function generaGriglia(whereGemerateGrid, howManycells){
    for (let i = 0; i < howManycells; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        if (howManycells === '100'){
            square.style.width = '10%';
        }
        square.innerText = i+1;
        whereGemerateGrid.insertAdjacentElement('beforeend', square);
    }
    const caselle = document.querySelectorAll('.square');
    for (let i = 0; i < caselle.length; i++) {
        const casella = caselle[i];
        casella.addEventListener('click', function(){
            casella.classList.toggle('selected_boxes');
            casella.classList.toggle('color_number');
            console.log(` This Box is the Number ${casella.innerHTML}`);
            
        });
    }
} 