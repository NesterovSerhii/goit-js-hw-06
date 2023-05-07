const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients');
const ingredientsItemsArray = [];
for (let ingredient of ingredients) {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList = 'item';
  ingredientsItemsArray.push(listItem);
}
ingredientsListRef.append(...ingredientsItemsArray);
console.log(ingredientsListRef);