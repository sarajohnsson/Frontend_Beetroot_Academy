// Create a function for Pokemon api search that also handles errors.
// Display the info and the image
// Display the name, stats, attacks etc in a Pokemon card

// const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const pokemonInput = document.querySelector(".pokemon_container_search_input");
const buttonElement = document.querySelector(".pokemon_container_search_btn");

const pokemonName = document.querySelector(".pokemon_card_bg_info_name");
const pokemonHp = document.querySelector(".pokemon_card_bg_info_hp_text");
const pokemonType = document.querySelector(".pokemon_card_bg_stats_type");
const pokemonAttack = document.querySelector(
    ".pokemon_card_bg_stats_attack_name"
);
const pokemonDamage = document.querySelector(
    ".pokemon_card_bg_stats_attack_dmg"
);
const pokemonNr = document.querySelector(".pokemon_card_bg_stats_gen_id");
const pokemonWeight = document.querySelector(
    ".pokemon_card_bg_stats_gen_weight"
);
const imgElement = document.querySelector(".pokemon_card_bg_img_sprite");

const typeColors = {
    normal: "#929da2",
    poison: "#ab6bc8",
    bug: "#91c12f",
    fire: "#ff9c54",
    electric: "#f4d339",
    dragon: "#086dc3",
    fighting: "#cd416a",
    ground: "#d97845",
    ghost: "#516aae",
    water: "#4f90d6",
    psychic: "#fa7077",
    dark: "#5a5465",
    flying: "#90a8de",
    rock: "#c5b68c",
    steel: "#598ea1",
    grass: "#63bd5a",
    ice: "#73cebe",
    fairy: "#ed8fe7",
};

function getRandomPokemonId() {
    return Math.floor(Math.random() * 1000) + 1;
}

document.addEventListener("DOMContentLoaded", () => {
    const randomPokemonId = getRandomPokemonId();
    getPokemon(randomPokemonId);
});

buttonElement.addEventListener("click", () => {
    const pokemonId = pokemonInput.value.toLowerCase();

    if (pokemonId) {
        getPokemon(pokemonId);
    } else {
        console.log("Please enter a Pokemon name!");
        alert("Please enter a Pokemon name!");
    }
});

function getPokemon(pokemonId) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Pokemon not found!");
            }
            return response.json();
        })
        .then((data) => {
            displayPokemonCard(data);
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function displayPokemonCard(data) {
    const pokemonSprite =
        data.sprites.other.dream_world.front_default ||
        data.sprites.front_default;

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";

    pokemonName.textContent = data.name;
    pokemonHp.textContent = data.stats[0].base_stat;
    pokemonAttack.textContent = data.abilities[0].ability.name;
    pokemonDamage.textContent = data.stats[1].base_stat;
    pokemonNr.textContent = `ID: ${data.id}`;
    pokemonWeight.textContent = `Weight: ${data.weight}`;

    getPokemonType(data);
}

function getPokemonType(pokemonData) {
    const type = pokemonData.types[0].type.name;
    const pokemonCardBg = document.querySelector(".pokemon_card_bg");
    pokemonType.textContent = pokemonData.types[0].type.name;

    if (typeColors[type]) {
        pokemonCardBg.style.setProperty("--normal-color", typeColors[type]);
    } else {
        pokemonCardBg.style.setProperty("--normal-color", typeColors.normal);
    }
}
