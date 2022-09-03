import { displayReserv, addReserv } from './displayReserv.js';

const foodContaier = document.querySelector('.modal-container');
export const revervationPopup = (totalFoodies) => {
  const reset = document.querySelectorAll('.reservation-btn');
  const overflow = document.querySelector('.overflow');
  reset.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      foodContaier.innerHTML = '';
      foodContaier.innerHTML += `
      <div class="revervation-card">
      <span class="comment-button">X</span>
            <div class="img-x">
              <img class="reserv-img" src="${totalFoodies[index][0].strMealThumb}" alt="${totalFoodies[index][0].strMeal}">
            </div>
            <h1 class="rever-description">${totalFoodies[index][0].strMeal}</h1>
            <div class="resev-details">
              <h3>${totalFoodies[index][0].strCategory}</h3>
              <h3>${totalFoodies[index][0].strArea}</h3>
            </div>
            <div class="card-container1"></div>
        </div>
      `;
      displayReserv(index);
      addReserv(index);

      const reset = document.querySelectorAll('.comment-button');
      reset.forEach((btn) => {
        btn.addEventListener('click', () => {
          overflow.style.display = 'none';
          foodContaier.innerHTML = '';
        });
      });
    });
  });
};
