import { revervationPopup } from './reservationPopup.js';
import { commentPopup } from './commentPopup.js';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const foodArray = [52772, 52953, 52853, 52870, 52765, 52813];
const foodContaier = document.querySelector('.card-container');

const displayMainPage = async () => {
  // Single Promise Execution
  const promises = foodArray.map(async (foodID) => {
    const response = await fetch(BASE_URL + foodID);
    const json = await response.json();
    return json.meals;
  });

  const totalFoodies = await Promise.all(promises);

  totalFoodies.forEach((item) => {
    foodContaier.innerHTML += `
        <div class="food-card">
          <img src="${item[0].strMealThumb}" alt="${item[0].strMeal}">
          <div class="food-details-flex">
            <p class="food-description">${item[0].strMeal}</p>
            <div class="like-icon-counter">
              <span class="like-button">X</span>
              <p class="like-counter">5</p>
            </div>
          </div>
          <div class="comments-reservations">
            <button type="button" class="reservation-button popup-buttons">Comments</button>
            <button type="button" class="reservation-btn popup-buttons">Reservation</button>
          </div>
        </div>
    `;
  });
  /// display the reservation popup
  revervationPopup(totalFoodies);

  // display the comment popup
  commentPopup(totalFoodies);
};

export default displayMainPage;
