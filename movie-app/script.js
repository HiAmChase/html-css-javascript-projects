const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const main = document.querySelector(".main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getMovie(APIURL);

async function getMovie(url) {
    const resp = await fetch(url);

    const respData = await resp.json();

    const movies = respData.results;

    console.log(respData.results);
    showMovies(movies);
}

function showMovies(movies) {
    main.innerHTML = '';
    movies.forEach((movie) => {
        const {title, backdrop_path, vote_average} = movie;
        let movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
            <img src="${IMGPATH + backdrop_path}" alt="${title}">
            <div class="movie-info">
                <h4>${title}</h4>
                <p class="${colorByRate(vote_average)}">${vote_average}</p>
            </div>
        `;

        main.appendChild(movieEl);
    });
}

function colorByRate(vote) {
    if (vote >= 8)
        return 'green';
    else if (vote >= 6)
        return 'yellow';
    else 
        return 'red';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;

    if (searchTerm) {
        getMovie(SEARCHAPI + searchTerm);
        search.value = '';
    }
})