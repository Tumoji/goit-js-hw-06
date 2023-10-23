const categoriesList = document.querySelector("#categories");

const categoryItems = categoriesList.querySelectorAll("h2");

const numberOfCategories = categoryItems.length;

const categoryName = [];

Array.from(categoryItems).forEach((category) => {
  const itemName = category.textContent;
  categoryName.push(itemName);
});

const itemElements = document.querySelectorAll("#categories .item");

const numberOfElements = [];
debugger
itemElements.forEach(function (itemElement) {
  const ulElement = itemElement.querySelector("ul");
  const liElements = ulElement.querySelectorAll("li");
  numberOfElements.push(liElements.length);
});

console.log(`Number of categories: ${numberOfCategories}`);
console.log(`Category: ${categoryName[0]}`);
console.log(`Elements: ${numberOfElements[0]}`);
console.log(`Category: ${categoryName[1]}`);
console.log(`Elements: ${numberOfElements[1]}`);
console.log(`Category: ${categoryName[2]}`);
console.log(`Elements: ${numberOfElements[2]}`);
