import './styles/style.css';
import './styles/homePageContentStyles.css';
import './styles/reservationpage.css';
import displayMainPage from './modules/displayMainPage.js';

document.addEventListener('DOMContentLoaded', async () => {
  displayMainPage();
});

const url='https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/abc234/reservations';

export const getSc = async () => {
  const data = await fetch(
    url,
  );
  const res = await data.json();
  return res;
};
export const postScore = async () => {
  const namevl = "arrta";
  const date_str = "2020-12-17";
  const date_end = "2020-12-18";
  const ids=1998;
  const response = await fetch(
    url,
    {
      method: 'POST',
      // headers: {
      //       'Content-type': 'application/json; charset= UTF-8',
      //     },
      body: JSON.stringify([
        {
        item_id:ids,
        username: namevl,
        date_start: date_str,
        date_end:date_end,
      }
    ]),
    },
  );
  const result = await response.json();
  return result;
};
// postScore();
const result= getSc();
console.log(result);
