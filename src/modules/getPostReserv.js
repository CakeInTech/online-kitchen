const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XHc1LAodKdqAUny8iXY4/reservations/';

export const getSc = async (ids) => {
  const getPath = `?item_id=${ids}`;
  const furl = await fetch(`${url}${getPath}`);
  const res = await furl.json();
  return res;
};

export const postScore = async (ids, name, sdate, edate) => {
  const response = await fetch(
    url,
    {
      method: 'POST',

      body: JSON.stringify({
        item_id: ids,
        username: name.value,
        date_start: sdate.value,
        date_end: edate.value,
      }),
      headers: {
        'Content-type': 'application/json; charset= UTF-8',
      },
    },
  );
  const result = await response.text();
  return result;
};
// const result= postScore();
// console.log(result);
// const results= getSc();
// console.log(results);
