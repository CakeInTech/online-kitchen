import { setLikes } from './diplayLikes.js';

const likeButtonsListener = () => {
  // declare queryselector after function call
  const likeButtons = document.querySelectorAll('.like-button');
  likeButtons.forEach((item) => {
    item.addEventListener('click', () => {
      // When menu is loaded call an async function to post likes
      setLikes(item.getAttribute('id'));

      // Update the local update to match the JSON database
      const currentLikeValue = item.nextSibling.nextElementSibling.textContent;
      const currentLikeObject = item.nextSibling.nextElementSibling;

      // Update the like value offliine as well
      currentLikeObject.innerHTML = (parseInt(currentLikeValue, 10) + 1);
    });
  });
};

export default likeButtonsListener;