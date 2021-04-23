const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const containerEl = document.querySelector(".container");
const formEl = document.querySelector("form");
const searchTerm = document.getElementById("search");

getMovies(API_URL);

async function getMovies(url) {
    const resp = await fetch(url);
    const data = await resp.json();
    
    console.log(data.results);
    showMovies(data.results);
}

function showMovies(listMovies) {
    containerEl.innerHTML = "";
    listMovies.forEach((movie) => {
        const cardEl = document.createElement("div");
        cardEl.classList.add("card");

        cardEl.innerHTML = `
            <img src="${IMG_PATH + movie.poster_path}" alt="${movie.title}">
            <div class="title">
                <h4>${movie.title}</h4>
                <span class="year">${movie.release_date.substring(0, 4)}</span>
            </div>
            <div class="desc">
                <h4>Overview</h4>
                <p>
                    ${movie.overview}
                </p>
            </div>
            `;
        containerEl.appendChild(cardEl);
    });
}

formEl.addEventListener("submit", async (e) => {
    e.preventDefault();
    const term = searchTerm.value;
    if (term) {
        const resp = await fetch(SEARCH_API + term);
        const data = await resp.json();

        console.log(data.results);

        containerEl.innerHTML = "";
        showMovies(data.results);
    }
})