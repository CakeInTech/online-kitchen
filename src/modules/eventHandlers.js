const likeButtonsListener = () => {
  // declare queryselector after function call
  const likeButtons = document.querySelectorAll('.like-button');
  likeButtons.forEach((item) => {
    item.addEventListener('click', () => {
      console.log(item.getAttribute('id'));
    });
  });
};

export default likeButtonsListener;