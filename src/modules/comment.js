/* eslint-disable camelcase */

import { postComment } from './involvementApi.js';

const updateCommentsAmount = () => {
  const commentAmount = document.getElementById('comment-amount');
  const newAmount = parseInt(commentAmount.innerText, 10) + 1;
  commentAmount.innerText = newAmount;
};

export const injectComment = (comment) => {
  const modal = document.getElementById('exampleModal');
  const newComment = document.createElement('li');
  newComment.classList.add('comment', 'list-group-item', 'text-start', 'p-2');
  newComment.innerHTML = `<span class="fst-italic">${comment.creation_date}</span> <span class="h6">${comment.username}</span>: <span>${comment.comment}</span>`;
  modal.querySelector('#comments').appendChild(newComment);
};

const commentSubmit = (pokeName) => {
  const username = document.querySelector('#username').value;
  const comment = document.querySelector('#comment').value;
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const year = time.getFullYear();
  const creation_date = `${year}-${month}-${day}`;
  injectComment({ username, comment, creation_date });
  updateCommentsAmount();
  postComment(pokeName, username, comment);
  document.querySelector('#username').value = '';
  document.querySelector('#comment').value = '';
};

export default commentSubmit;
