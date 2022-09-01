import './styles/style.css';
import './styles/homePageContentStyles.css';
import './styles/reservationpage.css';
import './styles/displayReserv.css';
import displayMainPage from './modules/displayMainPage.js';

document.addEventListener('DOMContentLoaded', async () => {
  await displayMainPage();

 //
 //  const INVOLVEMENT_API_ID = 'XHc1LAodKdqAUny8iXY4';
 //  const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
 //  const response = await fetch(`${BASE_URL + INVOLVEMENT_API_ID}/reservations`, {
 //   method: 'POST',
 //   body: JSON.stringify({
 //     item_id: 24,
 //     username:"Jane",
 //     date_start:"2020-10-15",
 //     date_end:"2020-10-16",
 //   }),
 //   headers: {
 //     'Content-type': 'application/json; charset=UTF-8',
 //   },
 // });
 //
 //  const getID = await response.text();
 //  // console.log(getID);
  // const result= await fetch(`${BASE_URL + INVOLVEMENT_API_ID}/reservations?item_id=24`);
  // const res = await result.json();
  // console.log(res);
});
