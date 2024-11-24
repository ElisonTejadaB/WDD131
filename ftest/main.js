import { recipes } from './recipes.mjs';
function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
    function getRandomRecipe() {
        const randomIndex = getRandomNumber(recipes.length);
        return recipes[randomIndex];
    }
    
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
            <p>${recipe.description}</p>
            <div class="tags">${tagsHTML}</div>
        </article>
    `;
}
function generateTagsHTML(tags) {
    return tags.map(tag => `<span class="tag">${tag}</span>`).join('');
}
function generateRatingHTML(rating) {
    return `
        ${'<span aria-hidden="true" class="icon-star">⭐</span>'.repeat(rating)}
        ${'<span aria-hidden="true" class="icon-star-empty">☆</span>'.repeat(5 - rating)}
    `;
}
function init() {
    const randomRecipe = getRandomRecipe();
    const recipesContainer = document.querySelector('.recipes');
    recipesContainer.innerHTML = generateRecipeHTML(randomRecipe);
}

document.addEventListener('DOMContentLoaded', init);


