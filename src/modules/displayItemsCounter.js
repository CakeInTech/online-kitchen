const displayItemsCounter = (totalScrollls) => {
  const totalRecipesTarget = document.querySelector('.total-recipes-counter');
  totalRecipesTarget.innerHTML = totalScrollls;
};

export const counter = (reservation, gets) => {
  const counter = document.createElement('p');
  counter.classList = 'counters';
  counter.innerHTML += `( ${gets.length} )`;
  reservation.appendChild(counter);
};

export default displayItemsCounter;
