const pokemonContainer = document.querySelector(".pokemon-container");
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const POKEMON_COUNT = 150;


async function getPokemon(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    createPokemonToCard(data);
}

const fetchPokemon = async () => {
    for (let i = 1; i <= POKEMON_COUNT; i++) {
        await getPokemon(i);
    }
}

function createPokemonToCard(pokemon) {
    const {id, name, types} = pokemon;
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemon");

    pokemonCard.innerHTML = `
        <div class="img-container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${id}.png" alt="Image">
        </div>
        <div class="infomation">
            <p id="id">${getIDCode(id)}</p>
            <h3>${name[0].toUpperCase() + name.slice(1)}</h3>
            <span>Type: ${types[0].type.name}</span>
        </div>
    `;

    pokemonCard.style.background = colors[types[0].type.name];

    pokemonContainer.appendChild(pokemonCard);
}

function getIDCode(id) {
    let str = String(id);
    while(str.length < 3) {
        str = "0" + str;
    }
    return "#" + str;
}

fetchPokemon();