const searchBox  = document.querySelector('.searchBox'); // for selection purpose 
const searchbtn  = document.querySelector('.searchbtn'); // for  selection purpose
const recipeContainer  = document.querySelector('.recipe-container'); // for selection purpose
const recipeDetailsContent = document.querySelector('.recipe-details-content'); // for selection purpose
const recipeCloseBtn  = document.querySelector('.recipe-close-btn'); // for selection purpose


//function to get recipies
const fetchRecipes = async (query) =>{
recipeContainer.innerHTML ="<h2>Fetching Recipes...</h2>";
try{
const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
const response = await data.json(); // storing response in json

recipeContainer.innerHTML = "";
response.meals.forEach(meal => {
const recipeDiv = document.createElement('div'); // to create html div
recipeDiv.classList.add('recipe');
recipeDiv.innerHTML = `
   <img src="${meal.strMealThumb}">
   <h3>${meal.strMeal}</h3>
   <p><span>${meal.strArea}</span> Dish<p>
   <p>Belongs to <span>${meal.strCategory}</span> Category<p>


`
const button = document.createElement('button');
button.textContent = "View Recipe";
recipeDiv.appendChild(button);

// Adding EventListener to recipe button
button.addEventListener('click',()=>{
  openRecipePopup(meal);
});
//
recipeContainer.appendChild(recipeDiv);

   });
} catch(error){
   recipeContainer.innerHTML = "<h2>Error in Fetching Recipes...</h2>"
}
}

// Function to fetch ingredients end measurements
const fetchIngredients = (meal) => {
  let ingredientsList = "";
  for(let i=1; i<=20; i++){
       const ingredient = meal[`strIngredient${i}`];
        if(ingredient){
            const measure = meal[`strMeasure${i}`];
        ingredientsList += `<li>${measure} ${ingredient}</li>`
      }
      else{
         break;
      }
   }
   return ingredientsList;
}
const openRecipePopup = (meal) => {
   recipeDetailsContent.innerHTML = `
   <h2 class="recipeName">${meal.strMeal}</h2>
   <h3>Ingredients:</h3>
   <ul class="ingredientList">${fetchIngredients(meal)}</ul>
   <div>
       <h3>Instruction</h3>
       <p class="recipeInstructions">${meal.strInstructions}</p>
   </div>
   `
  recipeDetailsContent.parentElement.style.display = "block";
}

recipeCloseBtn.addEventListener('click', (e) => {
    recipeDetailsContent.parentElement.style.display = "none";
});
searchbtn.addEventListener('click', (e) => {
e.preventDefault(); // It is used to prevent auto-submit.Now the page will not get refreshed.
const searchInput = searchBox.value.trim();  //local variable and removes starting and leading spaces.
if(!searchInput){
   recipeContainer.innerHTML= `<h2>Type the meal in the search box</h2>`;
   return;
}
fetchRecipes(searchInput);
});
// we use eventlistener ,when the button is clicked.so whatever we give input in input x that well get searched.

// In this we use TheMealdb Api