const categories = document.querySelector("ul#categories");
const categoriesItems = Array.from(categories.children).filter((category) =>
  category.classList.contains("item")
);

console.log("Number of categories:", categoriesItems.length);

const categoryElementsCount = categoriesItems.reduce((acc, el) => {
  let title;
  Array.from(el.children).forEach((child) => {
    if (child.localName === "h2") {
      title = child.innerText;
    } else if (child.localName === "ul") {
      acc[title] = child.children.length;
    }
  });
  return acc;
}, {});

for (let key in categoryElementsCount) {
  console.log(`Category: ${key}`);
  console.log(`Elements: ${categoryElementsCount[key]}`);
}
