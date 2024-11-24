/* import  recipes  from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

function generateTagsHTML(tags) {
    return tags.map(tag => `<span class="tag">${tag}</span>`).join('');
}

function generateRatingHTML(rating) {
    return `
        ${'<span aria-hidden="true" class="icon-star">⭐</span>'.repeat(Math.floor(rating))}
        ${'<span aria-hidden="true" class="icon-star-empty">☆</span>'.repeat(5 - Math.floor(rating))}
    `;
}

function generateRecipeHTML(recipe) {
    const tagsHTML = generateTagsHTML(recipe.tags);
    const ratingHTML = generateRatingHTML(recipe.rating);

    return `
        <article class="recipe">
            <h2>${recipe.name}</h2>
            <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                ${ratingHTML}
            </div>
            <img src="${recipe.image}" alt="${recipe.name}" />
            <p>${recipe.description}</p>
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.recipeIngredient.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h3>Instructions:</h3>
            <ol>
                ${recipe.recipeInstructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
            <div class="tags">${tagsHTML}</div>
        </article>
    `;
}

function renderRecipes(recipesToDisplay) {
    const recipesSection = document.querySelector('.recipes');
    recipesSection.innerHTML = ''; // Clear previous recipes
    if (recipesToDisplay.length === 0) {
        recipesSection.innerHTML = '<p>No recipes found.</p>';
        return;
    }
    recipesToDisplay.forEach(recipe => {
        recipesSection.innerHTML += generateRecipeHTML(recipe);
    });
}

function renderRandomRecipe() {
    const randomRecipe = getRandomListEntry(recipes);
    renderRecipes([randomRecipe]);
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const randomRecipeBtn = document.getElementById('random-recipe-btn');
  
    searchBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const query = searchInput.value.trim().toLowerCase();
        const filteredRecipes = recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(query) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(query))
        );
        renderRecipes(filteredRecipes);
    });
  
    randomRecipeBtn.addEventListener('click', renderRandomRecipe);
  
    renderRandomRecipe();
});
 */

/* --------------------------------------------------------- */

import  recipes  from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

function generateTagsHTML(tags) {
    return tags.map(tag => `<span class="tag">${tag}</span>`).join('');
}

function generateRatingHTML(rating) {
    return `
        ${'<span aria-hidden="true" class="icon-star">⭐</span>'.repeat(Math.floor(rating))}
        ${'<span aria-hidden="true" class="icon-star-empty">☆</span>'.repeat(5 - Math.floor(rating))}
    `;
}

function generateRecipeHTML(recipe) {
    const tagsHTML = generateTagsHTML(recipe.tags);
    const ratingHTML = generateRatingHTML(recipe.rating);

    return `
        <article class="recipe">
            <h2>${recipe.name}</h2>
            <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                ${ratingHTML}
            </div>
            <img src="${recipe.image}" alt="${recipe.name}" />
            <p>${recipe.description}</p>
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.recipeIngredient.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h3>Instructions:</h3>
            <ol>
                ${recipe.recipeInstructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
            <div class="tags">${tagsHTML}</div>
        </article>
    `;
}

function renderRecipes(recipeList) {
    const recipesSection = document.querySelector('.recipes');
    recipesSection.innerHTML = ''; // Clear previous recipes
    const recipesHTML = recipeList.map(generateRecipeHTML).join('');
    recipesSection.innerHTML = recipesHTML;
}

function handleSearch(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim().toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query))
    );
    renderRecipes(filteredRecipes);
}

function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
  
    searchBtn.addEventListener('click', handleSearch);
  
    // Render a random recipe on page load
    init();
});

