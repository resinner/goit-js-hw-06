const counter = (parent) => {
    console.log(parent.childElementCount);
  return parent.childElementCount;
};
const message = (elements) => {
  elements.forEach((element) => {
    const firstElem = element.firstElementChild;
    const secondElem = firstElem.nextElementSibling;
    console.log(`Category: ${firstElem.textContent}`);
    console.log(`Elements: ${counter(secondElem)}`);
  });
};
const categories = document.querySelector("#categories");
const subCategories = categories.querySelectorAll(".item");
console.log(`Number of categories: ${counter(categories)}`);
message(subCategories);
