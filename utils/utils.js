import { pokeData } from '../data/pokemon.js';

export function generateSelection(){
    const threeOptions = [];
    let option1, option2, option3 = 0;
    do {
        option1 = Math.floor(Math.random() * pokeData.length);
        option2 = Math.floor(Math.random() * pokeData.length);
        option3 = Math.floor(Math.random() * pokeData.length);
    } while (option1 === option2 || option2 === option3 || option1 === option3);
    let randomOption1 = pokeData[option1];
    let randomOption2 = pokeData[option2];
    let randomOption3 = pokeData[option3];
    threeOptions.push(randomOption1, randomOption2, randomOption3);
    return threeOptions;
}
// find pokemon captured using the id to push into captured Pokemon Array to create results
export function findById(pokemonResults, pokemonName) {
    for(let i = 0; i < pokemonResults.length; i++) {
        const capturedPokemon = pokemonResults[i];

        if (capturedPokemon.name === pokemonName) {
            return capturedPokemon;
        }

    }
}

//adding encounters
export function userEncounter(id) {
    let encounter = findById(id, encountered);
    if (encounter) {
        encountered.encounters ++;
    } else {
        const newEncounter = {
            _id: id,
            pokemon: pokeData.pokemon,
            images: pokeData.url_image,
            
            encounters: 1,
            caught: 0
        };
        encountered.push(newEncounter);
    }  
};

//adding captures
export function userCapture(id) {
    let catches = findById(id, caught);
    if (catches) {
        caught.captures++;
    } else {
        const newCatch = {
            _id: id,
            pokemon: pokeData.pokemon,
            images: pokeData.url_image,
            
            encounters: 0,
            captures: 1
        }
        caught.push(newCatch);
    }
}
