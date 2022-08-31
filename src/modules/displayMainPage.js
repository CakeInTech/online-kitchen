import { revervationPopup } from './reservationPopup.js';
import likeButtonsListener from './eventHandlers.js';
import { getLikes } from './diplayLikes.js';
import displayItemsCounter from './displayItemsCounter.js';
import { commentPopup } from './commentPopup.js';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const foodArray = [52853, 52953, 52772, 52813, 52765, 52870];
const foodContaier = document.querySelector('.card-container');

const displayMainPage = async () => {
  // Single Promise Execution
  const promises = foodArray.map(async (foodID) => {
    const response = await fetch(BASE_URL + foodID);
    const json = await response.json();
    return json.meals;
  });

  const totalLikes = await getLikes();
  const totalFoodies = await Promise.all(promises);
  let counter = 0;

  totalFoodies.forEach((item) => {
    foodContaier.innerHTML += `
        <div class="food-card">
          <img src="${item[0].strMealThumb}" alt="${item[0].strMeal}">
          <div class="food-details-flex">
            <p class="food-description">${item[0].strMeal}</p>
            <div class="like-icon-counter">
              <span class="like-button" id="${foodArray[counter]}">
                <i class="fa fa-heart fa-2x like-icon"></i>
              </span>
              <p class="like-counter">${totalLikes[counter].likes}</p>
            </div>
          </div>
          <div class="comments-reservations">
            <button type="button" class="reservation-button popup-buttons">Comments</button>
            <button type="button" class="reservation-btn popup-buttons">Reservation</button>
          </div>
        </div>
    `;
    counter += 1;
  });
  /// display the reservation popup
  revervationPopup(totalFoodies);

  // load the like buttons
  likeButtonsListener();
  
  // Load the total items;
  displayItemsCounter();

  // display the comment popup
  commentPopup(totalFoodies);
};

export default displayMainPage;
