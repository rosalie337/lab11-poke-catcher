// import functions 
import { pokeData } from '../data/pokemon.js';

//grab DOM elements
const resetButton = document.getElementById('reset-button');
const clearButton = document.getElementById('clear-button');
const images = document.querySelectorAll('poke-image');

// initialize state

let count = 0;
let encountered = [];
const remainingPokemon = pokeData.slice();


// set event listeners to update state and DOM

generateSelection();
