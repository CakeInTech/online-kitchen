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
            <span class="comment-button">X</span>
                <div class="img-x">
                <img class="comment-img" src="${totalFoodies[index][0].strMealThumb}" alt="${totalFoodies[index][0].strMeal}">
                </div>
                <h2 class="comment-description">${totalFoodies[index][0].strMeal}</h2>
                <div class="comment-details">
                <h5>${totalFoodies[index][0].strCategory}</h5>
                <h5>${totalFoodies[index][0].strArea}</h5>
                </div>
                <div class="former">
                <div class="popnav">
                 <a href="#" class="popnav-link">Add Comment</a>
                  <a href="#" class="popnav-link">See Comment</a>
                </div>
                <form>
                  <input id="visitor" type="text" placeholder="Your name" />
                  <input id="comment" type="text" placeholder="Your comments" />
                  <input id="submitter" type="hidden" />
                  <p class="validation-error">Please Enter name and comment to submit</p>
                  <input id="btn-save-comment" type="button" value="Comment" />
                </form>
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
const form = (element) => {
  element.preventDefault();
  const visitor = document.querySelector('#visitor').value;
  const comment = document.querySelector('#comment').value;

  if (visitor === '' || comment === '') {
    document.querySelector('.validation-error').style.display = 'block';
  } else {
    document.querySelector('.validation-error').style.display = 'none';
  }
};
export default form;