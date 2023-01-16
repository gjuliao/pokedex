/* eslint-disable no-prototype-builtins */

import { getComments } from './involvementApi.js';
import { injectComment } from './comment.js';

export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const updateModal = async (modal, pokemon) => {
  const pokeName = pokemon.name;
  const pokeImgUrl = pokemon.imgUrl;
  modal.querySelector('#modal-img').src = pokeImgUrl;
  modal.querySelector('#exampleModalLabel').innerText = capitalizeFirstLetter(pokeName);
  const comments = await getComments(pokeName);
  const commentsList = document.getElementById('comments');

  commentsList.innerHTML = '';

  if (!comments.hasOwnProperty('error')) {
    modal.querySelector(
      '#comment-counter',
    ).innerHTML = `<p>Comments: <span id='comment-amount'>${comments.length}</span></p>`;

    comments.forEach((comment) => {
      injectComment(comment);
    });
  } else {
    modal.querySelector(
      '#comment-counter',
    ).innerText = 'Be the first comment';
  }

  document.querySelectorAll('.stat').forEach((stat) => {
    const foundStat = pokemon.stats.find(
      (element) => element.stat.name === stat.id,
    );
    stat.innerHTML = `<strong>${foundStat.stat.name}: </strong> ${foundStat.base_stat}`;
  });
};
