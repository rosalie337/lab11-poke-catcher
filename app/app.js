// import functions 
import { rawPokeData } from '../data/pokemon.js'
import { randomPokemon, findById, putInLocalStorage, addingCaptures, addingEncounters } from '../utils/utils.js';

// grab DOM elements
// const name = document.querySelectorAll('h2'); // not rendering
export const images = document.querySelectorAll('label > img');
export const radios = document.querySelectorAll('input');
export const caughtDiv = document.querySelector('caught-div');
export const moreButton = document.querySelector('more-button');

// initialize state
let captures = 0;
let pokemonResults = []
let encounters = 0;

// renderPokemon function 
export function renderPokemon() {

    let firstPokemon = randomPokemon(rawPokeData);
    let secondPokemon = randomPokemon(rawPokeData);
    let thirdPokemon = randomPokemon(rawPokeData);
    
    while (firstPokemon.id === secondPokemon.id || secondPokemon.id === thirdPokemon.id || thirdPokemon.id === firstPokemon.id) {
        firstPokemon = randomPokemon(rawPokeData);
        secondPokemon = randomPokemon(rawPokeData);
        thirdPokemon = randomPokemon(rawPokeData);
    }
   
    
    radios[0].value = firstPokemon.pokemon;
    images[0].src = firstPokemon.url_image;
    radios[0].checked = false;

    radios[1].value = secondPokemon.id;
    images[1].src = secondPokemon.url_image;
    radios[1].checked = false;

    radios[2].value = thirdPokemon.id;
    images[2].src = thirdPokemon.url_image;
    radios[2].checked = false;
}
renderPokemon();

// set event listeners to update state and DOM
//encountered
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', (e) => {	
        caughtDiv.classList.remove('hidden');

        radios.forEach((radio) => {
            let encounteredPokemon = findById(pokemonResults, radio.value);
            if (!encounteredPokemon) {
                encounteredPokemon = {
                    pokeName: radio.value,
                    encountered: 1, 
                    captured: 0 
                },
                pokemonResults.push(encounteredPokemon);
            } else {
                encounteredPokemon.encountered++;
            } 
        });

// captured
        for (let i = 0; i < radios.length; i++) {
            addingEncounters(pokemonResults, radios[0].value);
            addingEncounters(pokemonResults, radios[1].value);
            addingEncounters(pokemonResults, radios[2].value);

            caughtDiv.classList.remove('hidden');
            radios[i].disabled = true;
            images[i].style.opacity = .5;
        }
        addingCaptures(pokemonResults, e.target.value);
        addingCaptures.captured++;
        putInLocalStorage('RESULTS', pokemonResults);
    });
}

// more button event listener
moreButton.addEventListener('click', () => {
    captures--;
    for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = false;
        images[i].style.opacity = 100;
    }
    if (captures === 0) { 
        window.location.href = './results/index.html';
    }
    renderPokemon();
});