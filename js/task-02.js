const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsContainer = document.querySelector("ul#ingredients");
let containerItemsFragment = document.createDocumentFragment();

for (let ingridient of ingredients) {
  const li = document.createElement("li");
  li.innerText = ingridient;
  li.classList.add("item");
  containerItemsFragment.appendChild(li);
}

ingredientsContainer.appendChild(containerItemsFragment);

// other method

// const ingredientsContainer = document.querySelector("ul#ingredients");

// const template = ingredients.reduce(
//   (acc, item) => (acc += `<li class="item">${item}</li>`),
//   ""
// );

// ingredientsContainer.innerHTML = template;