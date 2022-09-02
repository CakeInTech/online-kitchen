const displayItemsCounter = (totalScrollls) => {
  const totalRecipesTarget = document.querySelector('.total-recipes-counter');
  totalRecipesTarget.innerHTML = totalScrollls;
};

export default displayItemsCounter;
