import { setLikes } from './diplayLikes.js';

const likeButtonsListener = () => {
  // declare queryselector after function call
  const likeButtons = document.querySelectorAll('.like-button');
  likeButtons.forEach((item) => {
    item.addEventListener('click', () => {
      // When button is clicked call an async function to post likes
      setLikes(item.getAttribute('id'));
    });
  });
};

export default likeButtonsListener;