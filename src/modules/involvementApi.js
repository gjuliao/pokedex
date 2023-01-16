/* eslint-disable no-console, no-return-assign */
const appId = 'QytFtqgqu0l6D6O2kqi1';

export const postLike = (pokeName) => {
  fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: pokeName,
      }),
    },
  )
    .then((res) => res.text())
    .then((data) => console.log(data));
};

export const getLikes = async () => {
  let likes = [];
  await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`,
  )
    .then((res) => res.json())
    .then((data) => (likes = data))
    .catch((error) => console.log(error));

  return likes;
};

export const postComment = async (pokeName, username, comment) => {
  await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: pokeName,
        username,
        comment,
      }),
    },
  )
    .then((res) => res.text())
    .then((data) => data)
    .catch((error) => console.log(error));
};

export const getComments = async (pokeName) => {
  let comments = [];
  await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${pokeName}`,
  )
    .then((res) => res.json())
    .then((data) => (comments = data))
    .catch((error) => console.log(error));
  return comments;
};
