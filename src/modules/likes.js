/* eslint-disable radix */

import { postLike } from './involvementApi.js';

const handleLike = (likeBtn, pokeName) => {
  const likeCounter = likeBtn.nextSibling;
  if (!likeBtn.classList.contains('liked')) {
    likeBtn.classList.add('fa-solid', 'liked');
    postLike(pokeName);
    likeCounter.innerText = parseInt(likeCounter.innerText) + 1;
  } else {
    likeBtn.classList.remove('fa-solid', 'liked');
  }
};

export default handleLike;
