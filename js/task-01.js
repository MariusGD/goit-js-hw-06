let categories = document.querySelector("#categories"); 
console.log(`Number of categories: ${categories.children.length}`); 

for (let category of categories.children) {
  let headerItems = category.querySelectorAll("h2"); 
  console.log(`Category: ${headerItems[0].innerHTML}`); 
  let listItems = category.querySelectorAll("li"); 
  console.log(`Elements: ${listItems.length}`);