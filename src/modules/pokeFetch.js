/* eslint-disable no-restricted-syntax, no-await-in-loop */

import { getLikes } from './involvementApi.js';
import handleLike from './likes.js';
import { capitalizeFirstLetter } from './popUp.js';

const getLikesFromPokemon = (likesList, pokeName) => {
  let pokeLikes = likesList.find((pokemon) => pokemon.item_id === pokeName);
  if (pokeLikes !== undefined) {
    pokeLikes = pokeLikes.likes;
  }
  return pokeLikes;
};

export const createPokeCard = (name, imgSrc, likes, type) => {
  const divCard = document.createElement('div');
  divCard.classList.add('card', 'm-4', type);
  divCard.innerHTML = `<img src='${imgSrc}' id='${name}-img' class='card-img-top' alt='...' >
      <div class='card-body'>
        <div class='card-title d-flex justify-content-between'>
            <h5 class='card-title'>${capitalizeFirstLetter(name)}</h5>
            <h5 class='card-title'><i class='fa-regular fa-heart p-2 heart-icon'></i><span class='px-2'>${likes}</span>Likes</h5>
        </div>
        <div class='mx-auto d-grid'>
            <a class='btn btn-primary mt-4' data-bs-toggle='modal' data-bs-name=${name} data-bs-img=${imgSrc} data-bs-target='#exampleModal'>Comments</a>
        </div>
      </div>`;
  divCard.querySelector('.fa-heart').addEventListener('click', (e) => {
    const likeBtn = e.target;
    handleLike(likeBtn, name);
  });
  document.getElementById('cards').appendChild(divCard);
};

export const pokeFetch = async () => {
  const pokeChar = [
    {
      id: 0,
      url: 'https://pokeapi.co/api/v2/pokemon/ivysaur',
    },
    {
      id: 1,
      url: 'https://pokeapi.co/api/v2/pokemon/squirtle',
    },
    {
      id: 2,
      url: 'https://pokeapi.co/api/v2/pokemon/wartortle',
    },
    {
      id: 3,
      url: 'https://pokeapi.co/api/v2/pokemon/blastoise',
    },
    {
      id: 4,
      url: 'https://pokeapi.co/api/v2/pokemon/charmander',
    },
    {
      id: 5,
      url: 'https://pokeapi.co/api/v2/pokemon/charmeleon',
    },
    {
      id: 6,
      url: 'https://pokeapi.co/api/v2/pokemon/venusaur',
    },
    {
      id: 7,
      url: 'https://pokeapi.co/api/v2/pokemon/charizard',
    },
    {
      id: 8,
      url: 'https://pokeapi.co/api/v2/pokemon/vileplume',
    },
  ];

  const pokemonList = [];
  const likesList = await getLikes();

  for (const el of pokeChar) {
    await fetch(el.url)
      .then((response) => response.json())
      .then(async (data) => {
        const pokeLikes = getLikesFromPokemon(likesList, data.name);
        createPokeCard(
          data.name,
          data.sprites.other['official-artwork'].front_default,
          pokeLikes || 0,
          data.types[0].type.name,
        );
        pokemonList.push({
          name: data.name,
          imgUrl: data.sprites.other['official-artwork'].front_default,
          stats: data.stats,
          type: data.types[0].type.name,
        });
      });
  }
  return pokemonList;
};
