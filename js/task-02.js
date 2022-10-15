const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const liRef = ingredients
  .map((ingredient) => `<li>${ingredient}</li>`)
  .join("");
listRef.insertAdjacentHTML("afterbegin", liRef);
