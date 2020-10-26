import { grabFromLocalStorage, buildTable } from '../utils/utils.js';

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

buildTable(resultsArray);

var ctx = document.getElementById('myChart').getContext('2d');

const pokeName = resultsArray.map((item) => {
    return item.pokeName;

});

const caught = resultsArray.map((item) => {
    return item.captured;
   
});

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokeName,
        datasets: [{
            label: '# of Captured Pokemon',
            data: caught,
            backgroundColor: [
                'black',
                'yellow',
                'orange',
                'blue',
                'red',
                'green',
                'red',
                'yellow',
                'orange',
                'blue',
                'orange',
                'green',
                'red',
                'yellow',
            ],
            borderColor: [
                'black',
                'yellow',
                'orange',
                'blue',
                'red',
                'green',
                'red',
                'yellow',
                'orange',
                'blue',
                'orange',
                'green',
                'red',
                'yellow',
            ],
            borderWidth: 5
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
