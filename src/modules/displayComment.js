import { getCm, postCm } from './getPostComment.js';
import { counter2 } from './displayItemsCounter.js';

const ids = [52772, 52953, 52853, 52870, 52765, 52813];

export const displayComment = async (index) => {
  try {
    const foodContaier = document.querySelector('.displayComments');
    const gets = await getCm(ids[index]);
    const comment = document.createElement('div');
    comment.classList = 'displaycmt';
    // get number of comments
    counter2(comment, gets);
    foodContaier.appendChild(comment);
    gets.forEach((item) => {
      comment.innerHTML += `<p>${item.username} - ${item.comment}</p>`;
    });
  } catch (error) {
    console.error('No comment', error.message);
  }
};

export const addComment = (index) => {
  const foodContaier = document.querySelector('.displayComments');
  foodContaier.innerHTML += `<form class="cmForm" action="">
  <input type="text" id="cmName" class="cmName" -name="cmName" value="" placeholder="Your name" ><br>
  <input type="text" id="comment" class="comment" name="lname" value="" placeholder="Your comment"><br><br>
  <input type="submit" value="Comment">
</form> `;

  const form = document.querySelector('.cmForm');
  const name = document.querySelector('.cmName');
  const comment = document.querySelector('.comment');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await postCm(ids[index], name, comment);
    const gets = await getCm(ids[index]);
    const toUpdate = e.target.parentNode.childNodes[2];
    toUpdate.innerHTML = '';
    gets.forEach((item) => {
      toUpdate.innerHTML += `<p>${item.username} - ${item.comment}</p>`;
    });
  });
};
