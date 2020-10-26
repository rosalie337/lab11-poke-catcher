import { grabFromLocalStorage } from '../utils/utils.js';

//grab DOM elements
const resultsArray = grabFromLocalStorage('RESULTS');
const resetButton = document.getElementById('reset-button');
const clearButton = document.getElementById('clear-button');

resetButton.addEventListener('click', () => {
    localStorage.clear();
    window.location = 'index.html';
});

clearButton.addEventListener('click', () => {
    if (confirm('Are you sure you want to start a new game?'))
    localStorage.removeItem()
    window.location = 'index.html';
});

