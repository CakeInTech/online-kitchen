const container = document.querySelector('.modal-container');

export const commentPopup = (totalFoodies) => {
  const cmt = document.querySelectorAll('.reservation-button');
  const overflow = document.querySelector('.overflow');
  cmt.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      overflow.style.display = 'block';
      overflow.style.position = 'fixed';
      container.innerHTML = '';
      container.innerHTML += `
            <div class="comment-card">
                <div class="img-x">
                <img class="comment-img" src="${totalFoodies[index][0].strMealThumb}" alt="${totalFoodies[index][0].strMeal}">
                <span class="comment-button">X</span>
                </div>
                <h2 class="comment-description">${totalFoodies[index][0].strMeal}</h2>
                <div class="comment-details">
                <h3>${totalFoodies[index][0].strCategory}</h3>
                <h3>${totalFoodies[index][0].strArea}</h3>
                </div>
            </div>
        `;
      const reset = document.querySelectorAll('.comment-button');
      reset.forEach((btn) => {
        btn.addEventListener('click', () => {
          overflow.style.display = 'none';
          container.innerHTML = '';
        });
      });
    });
  });
};