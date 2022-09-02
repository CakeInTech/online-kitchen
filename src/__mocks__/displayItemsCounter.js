const INVOLVEMENT_API_ID = 'XHc1LAodKdqAUny8iXY4';
const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

async function convert() {
  try {
    const response = await fetch(`${BASE_URL + INVOLVEMENT_API_ID}/likes`);
    const getLikesData = await response.json();
    return getLikesData.length;
  } catch (e) {
    return null;
  }
}

export { convert };