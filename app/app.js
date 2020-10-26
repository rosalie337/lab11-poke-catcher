//import functions 
import { pokeData } from '../data/pokemon.js';
import { findById, putInLocalStorage, addEncounter, addCaptures } from '../utils/utils.js';

//grab DOM elements
// const name = document.querySelectorAll('h2'); // not rendering
const images = document.querySelectorAll('label > img');
const radioButtons = document.querySelectorAll('input');
const userCaptures = document.querySelector('user-captures');
const moreButton = document.querySelector('more-button');

// initialize state
let count = 0;
let pokemonResults = []
let encountered = 0;

// set event listeners to update state and DOM

export function generateSelection() {

    let option1 = Math.floor(Math.random() * pokeData.length);
    let option2 = 0
    let option3 = 0
        do {
            option2 = Math.floor(Math.random() * pokeData.length);
            option3 = Math.floor(Math.random() * pokeData.length);
   
        } while (option1 === option2 || option2 === option3 || option1 === option3);
            let randomOption1 = pokeData[option1];
            let randomOption2 = pokeData[option2];
            let randomOption3 = pokeData[option3];
    
    
    // name[0].value = randomOption1.pokemon; // not rendering
    radioButtons[0].value = randomOption1.id;
    images[0].src = randomOption1.url_image;
    radioButtons[0].check = false;

    // name[1].value = randomOption2.pokemon; // not rendering
    radioButtons[1].value = randomOption2.id;
    images[1].src =randomOption2.url_image;
    radioButtons[1].check = false;

    // name[2].value = randomOption1.pokemon; // not rendering
    radioButtons[2].value = randomOption3.id;
    images[2].src =randomOption3.url_image;
    radioButtons[2].check = false;
}

generateSelection();

function generateGamePlay() {
    if (count >= 10) {
       resultsData(encountered);
       window.location('results.html');
    }

    userCaptures.textContent = `You have ${count} Pokemon in your Pokedex `;
    count++;
    
    generateSelection()
    for(let i= 0; radioButtons < i; i++) {

    }
        radio[i].addEventListener()
    for(let i = 0; i < selection.length; i++){
        const pokemonId = selection[i].id;
        hasEncountered(pokemonId);
        const caughtCount = findById(pokemonId, count).caught;
        const encounteredCount = findById(pokemonId, encountered).encounters;
        
    }
}


generateSelection();


// captured pokemon
for(let i = 0; i < radioButtons.length; i++) {
    addEncounter(pokemonResults, radioButtons[0].value)
    addEncounter(pokemonResults, radioButtons[1].value)
    addEncounter(pokemonResults, radioButtons[2].value)

    userCaptures.classList.remove('hidden');
    radioButtons[i].disabled = true;
    images[i].style.opacity = .5;
}
addCaptures(pokemonResults, e.target.value);
addEncounter.caught++;
putInLocalStorage('RESULTS', pokemonResults);



moreButton.addEventListener('click', () => {
    count--;
    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].disabled = false;
        images[i].style.opacity = 100;
    }
    if (count === 0) {
        window.location.href = './result/results.html'
    }
});

generateSelection()

