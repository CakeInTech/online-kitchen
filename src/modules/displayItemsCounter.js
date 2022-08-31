const displayItemsCounter = () => {
  const totalRecipes = document.querySelectorAll('.food-card');
  const totalRecipesTarget = document.querySelector('.total-recipes-counter');
  totalRecipesTarget.innerHTML = totalRecipes.length;
};

export default displayItemsCounter;
