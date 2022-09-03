const INVOLVEMENT_API_ID = 'XHc1LAodKdqAUny8iXY4';
const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const getLikes = async () => {
  try {
    const response = await fetch(`${BASE_URL + INVOLVEMENT_API_ID}/likes`);
    const getLikesData = await response.json();
    return getLikesData;
  } catch (error) {
    return error;
  }
};

const setLikes = async (likeButtonID) => {
  try {
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
    return getID;
  } catch (error) {
    return null;
  }
};

export { setLikes, getLikes };