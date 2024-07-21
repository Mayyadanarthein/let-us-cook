// Load recipe data from data.js
const recipeData = recipes;

// Function to create recipe cards
function createRecipeCards() {
    const recipeCards = document.querySelector('.recipe-cards');

    recipeData.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.addEventListener('click', () => {
            window.location.href = `recipes.html?id=${recipe.id}`;
        });

        const img = document.createElement('img');
        img.src = recipe.image;
        img.alt = recipe.name;

        const title = document.createElement('h3');
        title.textContent = recipe.name;

        const description = document.createElement('p');
        description.textContent = recipe.description;

        recipeCard.appendChild(img);
        recipeCard.appendChild(title);
        recipeCard.appendChild(description);
        recipeCards.appendChild(recipeCard);
    });
}

// Call the function to create the recipe cards
createRecipeCards();

// Smooth scroll effect
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});