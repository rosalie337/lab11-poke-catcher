//grab DOM elements

const resetButton = document.getElementById('reset-button');
const clearButton = document.getElementById('clear-button');

resetButton.addEventListener('click', () => {
    window.location = 'index.html';
});

clearButton.addEventListener('click', () => {
    if (confirm('Are you sure you want to start a new game?'))
    //localStroge.removeItem(')
    window.location = 'index.html';
});
