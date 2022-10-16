const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const liRef = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  return li;
});
listRef.append(...liRef);
