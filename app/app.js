//import functions 
import { pokeData } from '../data/pokemon.js';
import { findById } from '../utils/utils.js';
//grab DOM elements
const name = document.querySelector('h2');
const images = document.querySelectorAll('img');
const radioButtons = document.querySelectorAll('input');

// initialize state

let count = 0;
let encountered = [];

// set event listeners to update state and DOM

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

function generateSelection(){

    let option1 = Math.floor(Math.random() * pokeData.length);
    let option2 = 0
    let option3 = 0
    console.log(option1);
         do {

            option2 = Math.floor(Math.random() * pokeData.length);
            option3 = Math.floor(Math.random() * pokeData.length);
   
    } while (option1 === option2 || option2 === option3 || option1 === option3);
    let randomOption1 = pokeData[option1];
    let randomOption2 = pokeData[option2];
    let randomOption3 = pokeData[option3];
    
    console.log(randomOption1);

    radioButtons[0].value = randomOption1.id;
    images[0].src = randomOption1.url_image;

    radioButtons[1].value = randomOption2.id;
    images[1].src =randomOption2.url_image;

    radioButtons[2].value = randomOption3.id;
    images[2].src =randomOption3.url_image;
}

function catches(id) {
    let catches = findById(id, encountered);
    if (catches) {
        catches.caught++;
    } else {
        const newCatch = {
            _id: id,
            encounters: 0,
            caught: 1
        }
        encounter.push(newCatch);
    }
}
function userEncounter(id) {
    let encounter = findById(id, encountered);
    if (encounter) {
        encountered.encounters ++;
    } else {
        const newEncounter = {
            _id: id,
            encounters: 1,
            caught: 0
        };
        encountered.push(newEncounter);
    }
};

generateSelection();
