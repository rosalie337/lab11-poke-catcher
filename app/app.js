// import functions 
//import { pokeData } from '../data/pokemon.js';
import { generateSelection, findById } from '../utils/utils.js';
//grab DOM elements
const resetButton = document.getElementById('reset-button');
const clearButton = document.getElementById('clear-button');
const images = document.querySelectorAll('poke-image');

// initialize state

let count = 0;
let encountered = [];
//const remainingPokemon = pokeData.slice();


// set event listeners to update state and DOM

generateSelection();

function generateSelection() {
    if (count >= 10) {
       resultsData(encountered);
       window.location('results.html');
    }

    userCaptures.textContent = `You have ${count} Pokemon in your Pokedex `;
    count++;

    const populatePokemon = document.getElementById('populate-pokemon');
    while (populatePokemon.firstChild) {
        populatePokemon.removeChild(populatePokemon.firstChild);
    }

    const selection = gamePlay();
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
