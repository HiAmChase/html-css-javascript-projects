const mealsEl = document.getElementById("meals");
const favContainer = document.getElementById("fav-meals");
const searchTerm = document.getElementById("search-term");
const searchBtn = document.getElementById("search");
const mealPopup = document.getElementById("meal-popup");

getRandomMeal();
fetchFavMeals();

async function getRandomMeal() {
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");

    const randomMeal = await resp.json();
    const meal = randomMeal.meals[0];
    console.log(meal);

    addMeal(meal, true);
}

async function getMealById(id) {
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);

    const respData = await resp.json();
    const meal = respData.meals[0];

    return meal;
}

async function getMealBySearch(term) {
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);

    const respData = await resp.json();
    const meal = respData.meals;

    return meal;
}

function addMeal(mealData, random = false) {
    const meal = document.createElement("div");
    meal.classList.add("meal");

    meal.innerHTML = `
        ${random ? `
        <div class="random">
            <p>Random Recipe</p>
        </div> ` : ''}
        <div class="meal-header">
            <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
        </div>
        <div class="meal-body">
            <h4>
                ${mealData.strMeal}
            </h4>
            <button class="fav-button">
                <i class="fas fa-heart"></i>
            </button>
        </div>
    `;

    const btn = meal.querySelector(".meal-body .fav-button");

    btn.addEventListener("click", () => {
        if (btn.classList.contains("active")) {
            btn.classList.remove("active");
            removeMealLS(mealData.idMeal);
        }
        else {
            btn.classList.add("active");
            addMealLS(mealData.idMeal);
        }
        fetchFavMeals();
    });

    mealsEl.appendChild(meal);
}

function addMealLS(mealId) {
    const mealIds = getMealIdLS();

    localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
}

function removeMealLS(mealId) {
    const mealIds = getMealIdLS();

    localStorage.setItem("mealIds", JSON.stringify(mealIds.filter((id) => id !== mealId)));
}

function getMealIdLS() {
    const mealIds = JSON.parse(localStorage.getItem("mealIds"));

    return mealIds === null ? [] : mealIds;
}

async function fetchFavMeals() {
    favContainer.innerHTML = "";

    const mealIds = getMealIdLS();

    for (let i = 0; i < mealIds.length; i++) {
        const mealId = mealIds[i];
        const meal = await getMealById(mealId);

        addMealToFav(meal);
    }
}

function addMealToFav(mealData) {
    const meal = document.createElement("li");
    meal.classList.add("meal-fav");
    meal.innerHTML = `
        <img class="fav-meals" src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
        <span>${mealData.strMeal}</span>
        <button class="close">
            <i class="far fa-window-close"></i>
        </button>
    `;

    const btnClose = meal.querySelector(".close");
    const popup = meal.querySelector("img");

    btnClose.addEventListener('click', () => {
        removeMealLS(mealData.idMeal);

        fetchFavMeals();
    });

    popup.addEventListener('click', () => {
        showMeal(mealData);
    });

    favContainer.appendChild(meal);
}

searchBtn.addEventListener('click', async () => {
    mealsEl.innerHTML = "";

    const search = searchTerm.value;
    const meals = await getMealBySearch(search);

    if (meals) {
        meals.forEach((meal) => {
            addMeal(meal);
        });
    }
});

function showMeal(mealData) {
    //clean mealPopup
    mealPopup.classList.remove("hidden");
    mealPopup.innerHTML = '';

    let ingredient = [];

    //get ingredient
    for (let i = 1; i <= 20; i++) {
        if (mealData['strIngredient' + i]) {
            ingredient.push(`${mealData['strIngredient' + i]} / ${mealData['strMeasure' + i]}`);
        }
        else {
            break;
        }
    }

    const mealInfo = document.createElement("div");
    mealInfo.classList.add("popup");

    mealInfo.innerHTML = `
        <button id="close" class="close-popup">
            <i class="far fa-window-close"></i>
        </button>
        <div id="meal-info" class="meal-container">
            <div>
                <h2>${mealData.strMeal}</h2>
                <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
            </div>
            <p>
            ${mealData.strInstructions}
            </p>
            <h3>Ingredients: </h3>
            <ul>
                ${ingredient.map((ing) => 
                    `<li>${ing}</li>`
                    ).join("")}
            </ul>
        </div>
    `;

    const btnClose = mealInfo.querySelector(".close-popup");

    btnClose.addEventListener('click', () => {
        mealPopup.classList.add("hidden");
    });

    mealPopup.appendChild(mealInfo);
}