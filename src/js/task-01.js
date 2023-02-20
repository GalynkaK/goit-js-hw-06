const categoriesEl = document.querySelector("#categories").children.length;
console.log(`Number of categories:`, categoriesEl);

const itemElements = document.querySelectorAll('.item');
itemElements.forEach(itemElements =>
  console.log(
    `Category: ${itemElements.querySelector("h2").textContent}  
    Elements: ${itemElements.querySelectorAll("li").length}`,
  ),
);
