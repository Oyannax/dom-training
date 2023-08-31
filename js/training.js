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

const button3 = document.querySelector('#ex3 .button');
const animalsList = document.querySelector('#ex3 .flex-list');

button3.addEventListener('click', function() {
    animalsList.insertBefore(animalsList.firstElementChild, animalsList.lastChild);
});

/* ------------------------------------ */
/* --- Exercice 4 --- */

const button4 = document.querySelector('#ex4 .button');

function setColor() {
    button4.style.backgroundColor = button4.style.backgroundColor === 'red' ? 'green' : 'blue';
}

button4.addEventListener('click', function(event) {
    if (event.detail === 1) {
        this.style.backgroundColor = 'blue';
    } else if (event.detail === 2) {
        this.style.backgroundColor = 'red';
        setInterval(setColor, 2000);
    }
});

/* ------------------------------------ */
/* --- Exercice 5 --- */

const buttonsList = document.querySelector('#ex5 .flex-list');
const colors = ['#C44C51', '#8CC6D7', '#FFDA8C', '#006D80', '#BDA44D', '#3C2000'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];

buttonsList.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = randomColor;
});

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
