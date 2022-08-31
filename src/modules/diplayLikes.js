const INVOLVEMENT_API_ID = 'XHc1LAodKdqAUny8iXY4';
const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const TEST_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KFWAWpNuJb0b9FZEXp7P/likes';

// `${BASE_URL + INVOLVEMENT_API_ID}/likes`

// const getLikes = async () => {
//   const response = await fetch(TEST_URL);
//   const getLikesData = await response.json();
//   console.log(getLikesData);
// };

const setLikes = async (likeButtonID) => {
  const response = await fetch(`${BASE_URL + INVOLVEMENT_API_ID}/likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: likeButtonID,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const getID = await response.text();
  console.log(getID);
};
