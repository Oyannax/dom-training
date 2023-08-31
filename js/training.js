/* ------------------------------------ */
/* --- Exercice 1 --- */

// function toggleNoDisplay() {
//     document.querySelector('#ex1 .text').classList.toggle('hidden');
// }

// document.querySelector('#ex1 .button').addEventListener('click', toggleNoDisplay);

const button1 = document.querySelector('#ex1 .button');
const text1 = document.querySelector('#ex1 .text');

button1.addEventListener('click', function() {
    text1.classList.toggle('hidden');
});


/* ------------------------------------ */
/* --- Exercice 2 --- */

const span = document.querySelector('#ex2 #ex2-scroll-value');

setInterval(function() {
    span.innerHTML = Math.floor(window.scrollY);
}, 1000);

/* ------------------------------------ */
/* --- Exercice 3 --- */


/* ------------------------------------ */
/* --- Exercice 4 --- */


/* ------------------------------------ */
/* --- Exercice 5 --- */


/* ------------------------------------ */
/* --- Exercice 6 --- */



/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
    "🥖 Acheter du pain",
    "🗑️ Descendre la poubelle",
    "🐶 Sortir le chien",
    "🍽️ Faire la vaisselle",
    "🧹 Passer l'aspirateur",
    "🌳 Tondre la pelouse"
];


/* ------------------------------------ */
/* --- Exercice 8 --- */
