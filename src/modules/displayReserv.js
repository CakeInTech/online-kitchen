import { getSc, postScore } from './getPostReserv.js';
import { counter } from './displayItemsCounter.js';


const ids = [52772, 52953, 52853, 52870, 52765, 52813];

export const displayReserv = async (index) => {
  const foodContaier = document.querySelector('.card-container1');
  const gets = await getSc(ids[index]);
  const reservation = document.createElement('div');
  reservation.classList = 'displayReserv';
  const header = document.createElement('h3');
  header.innerHTML = 'Reservations';
  // get number of reservations
  counter(reservation, gets);

  reservation.appendChild(header);
  foodContaier.appendChild(reservation);
  gets.forEach((item) => {
    reservation.innerHTML += `<p>${item.date_start} - ${item.date_end} by ${item.username}</p>`;
  });
};
export const addReserv = (index) => {
  const foodContaier = document.querySelector('.card-container1');
  foodContaier.innerHTML += `<h2 class="reser"> Add Reservation</h2><form class="theform" action="">
  <label for="fname">Your name</label><br>
  <input type="text" id="fname" class="fname" -name="fname" value=""><br>

  <label for="sdate">Start date</label><br>
  <input type="text" id="sdate" class="sdate" name="lname" value=""><br><br>

  <label for="edate">end date:</label><br>
  <input type="text" id="edate" class="edate" name="lname" value=""><br><br>

  <input type="submit" value="Reserve">
</form> `;

  const form = document.querySelector('.theform');
  const name = document.querySelector('.fname');
  const startdate = document.querySelector('.sdate');
  const enddate = document.querySelector('.edate');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    postScore(ids[index], name, startdate, enddate);
  });
};
