import { getCm, postCm } from './getPostComment.js';

const ids = [52772, 52953, 52853, 52870, 52765, 52813];

export const displayComment = async (index) => {
  const foodContaier = document.querySelector('.displayComments');
  const gets = await getCm(ids[index]);
  const comment = document.createElement('div');
  comment.classList = 'displaycomment';
  foodContaier.appendChild(comment);
  gets.forEach((item) => {
    comment.innerHTML += `<p>${item.username} - ${item.comment}</p>`;
  });
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
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    postCm(ids[index], name, comment);
  });
};