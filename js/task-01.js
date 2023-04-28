const categorie = document.querySelector('#categories');
console.dir(`Number of categories: ${[...categorie.children].length}`);

[...categorie.children].forEach(item => console.log(`Category: ${item.firstElementChild.textContent} 
Elements: ${item.lastElementChild.children.length}`));
