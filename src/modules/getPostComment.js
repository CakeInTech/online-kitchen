const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XHc1LAodKdqAUny8iXY4/comments';

export const getCm = async (ids) => {
  const getPath = `?item_id=${ids}`;
  const furl = await fetch(`${url}${getPath}`);
  const com = await furl.json();
  return com;
};
export const postCm = async (ids, name, cm) => {
  const response = await fetch(
    url,
    {
      method: 'POST',

      body: JSON.stringify({
        item_id: ids,
        username: name.value,
        comment: cm.value,
      }),
      headers: {
        'Content-type': 'application/json; charset= UTF-8',
      },
    },
  );
  const result = await response.text();
  return result;
};