const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XHc1LAodKdqAUny8iXY4/reservations/';

export const getSc = async (ids) => {
  const getPath = `?item_id=${ids}`;
  try {
    const furl = await fetch(`${url}${getPath}`);
    const res = await furl.json();
    return res;
  } catch (error) {
    return error;
  }
};

export const postScore = async (ids, name, sdate, edate) => {
  try {
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
  } catch (error) {
    return error;
  }
};
