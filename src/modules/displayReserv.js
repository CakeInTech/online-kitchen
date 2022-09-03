import { getSc, postScore } from './getPostReserv.js';
import { counter } from './displayItemsCounter.js';

const ids = [52772, 52953, 52853, 52870, 52765, 52813];

export const displayReserv = async (index) => {
  try {
    const foodContaier = document.querySelector('.card-container1');
    const gets = await getSc(ids[index]);

    const reservation = document.createElement('div');
    reservation.classList = 'displayReserv';
    // get number of reservations
    counter(reservation, gets);

    gets.forEach((item) => {
      reservation.innerHTML += `<p>${item.date_start} - ${item.date_end} by ${item.username}</p>`;
    });
    foodContaier.appendChild(reservation);
  } catch (error) {
    console.error(' No reservation', error.message);
  }
};
export const addReserv = (index) => {
  const foodContaier = document.querySelector('.card-container1');
  foodContaier.innerHTML += `<h2 class="reser"> Add Reservation</h2><form class="theform" action="">
  <label for="fname">Your name</label><br>
  <input type="text" id="fname" class="fname" -name="fname" value=""><br>

  <label for="sdate">Start date</label><br>
  <input type="date" id="sdate" class="sdate" name="lname" value=""><br><br>

  <label for="edate">end date:</label><br>
  <input type="date" id="edate" class="edate" name="lname" value=""><br><br>

  <input type="submit" value="Reserve">
</form> `;

  const form = document.querySelector('.theform');
  const name = document.querySelector('.fname');
  const startdate = document.querySelector('.sdate');
  const enddate = document.querySelector('.edate');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await postScore(ids[index], name, startdate, enddate);
    const gets = await getSc(ids[index]);
    const toUpdate = e.target.parentNode.childNodes[3];
    toUpdate.innerHTML = '';
    gets.forEach((item) => {
      toUpdate.innerHTML += `<p>${item.date_start} - ${item.date_end} by ${item.username}</p>`;
    });
  });

  // updateCont.innerHTML='';
};
