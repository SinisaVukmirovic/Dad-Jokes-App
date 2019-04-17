
// // selecting the DOM elements
let btn = document.querySelector('.btn');
let joke = document.querySelector('.joke');

btn.addEventListener('click', getJoke);

function getJoke() {
    dadJokesApi().then(results => {
        console.log(results);
        joke.textContent = results.joke;
    })
    .catch(err => {
        console.log(err);
    });
}

async function dadJokesApi() {
    let apiUrl = 'https://icanhazdadjoke.com/';
    let options = { 
        method: 'GET',
        headers: {
          "Accept" : "application/json" 
        }
    };

    let response = await fetch(apiUrl, options);
    let data = await response.json();

    return data;
}
