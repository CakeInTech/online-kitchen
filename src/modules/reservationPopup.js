const foodContaier = document.querySelector('.card-container');
import {displayReserv,addReserv} from './displayReserv.js';

export const revervationPopup = (totalFoodies) => {
  const reset = document.querySelectorAll('.reservation-btn');
  reset.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      foodContaier.innerHTML = '';
      foodContaier.innerHTML += `
          <div class="revervation-card">
            <div class="img-x">
              <img class="reserv-img" src="${totalFoodies[index][0].strMealThumb}" alt="${totalFoodies[index][0].strMeal}">
              <span class="reser-button">X</span>
            </div>
            <h1 class="rever-description">${totalFoodies[index][0].strMeal}</h1>
            <div class="resev-details">
              <h3>${totalFoodies[index][0].strCategory}</h3>
              <h3>${totalFoodies[index][0].strArea}</h3>
            </div>
        </div>
      `;
      addReserv(index);
      displayReserv(index);
    });
  });
};
