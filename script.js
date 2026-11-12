
// ======================================
// 1. DISPLAY CURRENT YEAR
// ======================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ======================================
// 2. FILTER FOOD BY CATEGORY
// ======================================

function filterFood(category, button) {

    const foods = document.querySelectorAll(".menu-card");

    foods.forEach(function(food) {

        if (category === "all" ||
            food.dataset.category === category) {

            food.style.display = "flex";

        } else {

            food.style.display = "none";

        }

    });

    document.querySelectorAll(".filter-btn").forEach(function(btn) {
        btn.classList.remove("active");
    });

    if (button) button.classList.add("active");
}


// ======================================
// 3. GALLERY CATEGORY FILTER
// ======================================

function filterGallery(category, button) {

    const pictures = document.querySelectorAll(".gallery-item");

    pictures.forEach(function(picture) {

        picture.style.display =
            category === "all" ||
            picture.dataset.category === category
            ? "block" : "none";

    });

    document.querySelectorAll(".gallery-btn").forEach(function(btn) {
        btn.classList.remove("active");
    });

    if (button) button.classList.add("active");
}


// ======================================
// 4. CONTACT FORM
// ======================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        document.getElementById("formMessage").textContent =
            "Thank you! Your message has been received.";

        contactForm.reset();
    });
}


// CLEAR CONTACT FORM WHEN RETURNING

window.addEventListener("pageshow", function() {

    const form = document.querySelector(".contact-form form");

    if (form) form.reset();

});


// ======================================
// 5. SEARCH FOOD FUNCTION
// ======================================

const foods = [
    "Japanese Sushi",
    "Indonesian Nasi Goreng",
    "Indian Chicken Biryani",
    "Italian Pizza",
    "Italian Pasta",
    "Spanish Paella",
    "Rwandan Isombe",
    "Nigerian Jollof Rice",
    "Ethiopian Injera",
    "Mexican Tacos",
    "American Burger",
    "Mexican Enchiladas"
];

function searchFood() {

    const input = document.getElementById("foodSearch");
    const results = document.getElementById("searchResults");

    if (!input || !results) return;

    const searchInput = input.value.trim().toLowerCase();

    if (searchInput === "") {
        results.textContent = "Please enter a food name.";
        return;
    }

    const matches = foods.filter(function(food) {
        return food.toLowerCase().includes(searchInput);
    });

    if (matches.length === 0) {
        results.textContent =
            "Sorry, no food found. Try another name.";
        return;
    }

    results.innerHTML =
        "<p>We found " + matches.length + " result(s):</p>";

    matches.forEach(function(food) {

        const link = document.createElement("a");
        link.className = "search-result";
        link.href = "menu.html";
        link.textContent = food + " – View Menu";

        results.appendChild(link);

    });
}


// ======================================
// 6. RECIPE DETAILS FOR ALL 12 FOODS
// ======================================

const recipes = {

    sushi: {
        name: "Japanese Sushi",
        country: "Origin: Japan",
        time: "About 45 minutes",
        ingredients: [
            "2 cups sushi rice",
            "Nori seaweed sheets",
            "Rice vinegar",
            "Cucumber",
            "Avocado",
            "Fresh fish or another suitable filling",
            "Soy sauce"
        ],
        steps: [
            "Wash and cook the sushi rice.",
            "Mix the rice with rice vinegar and allow it to cool.",
            "Place a seaweed sheet on a bamboo mat.",
            "Spread rice over the seaweed.",
            "Add cucumber, avocado and your chosen filling.",
            "Roll carefully and cut into small pieces.",
            "Serve with soy sauce."
        ]
    },

    "nasi-goreng": {
        name: "Indonesian Nasi Goreng",
        country: "Origin: Indonesia",
        time: "About 20 minutes",
        ingredients: [
            "2 cups cooked rice",
            "2 cloves garlic",
            "2 shallots",
            "1 egg",
            "Sweet soy sauce",
            "Cooking oil",
            "Salt and pepper"
        ],
        steps: [
            "Chop the garlic and shallots.",
            "Heat oil in a frying pan.",
            "Fry garlic and shallots until fragrant.",
            "Add the egg and scramble.",
            "Add the cooked rice.",
            "Add sweet soy sauce, salt and pepper.",
            "Mix well and serve."
        ]
    },

    biryani: {
        name: "Indian Chicken Biryani",
        country: "Origin: India",
        time: "About 60 minutes",
        ingredients: [
            "2 cups basmati rice",
            "500g chicken",
            "1 onion",
            "2 tomatoes",
            "Plain yogurt",
            "Ginger and garlic",
            "Biryani spices",
            "Cooking oil and salt"
        ],
        steps: [
            "Wash and soak the basmati rice.",
            "Marinate chicken with yogurt and spices.",
            "Fry sliced onions until golden.",
            "Add chicken and tomatoes and cook.",
            "Boil rice until partly cooked.",
            "Layer rice over the chicken.",
            "Cover and cook until everything is fully cooked.",
            "Serve hot."
        ]
    },

    pizza: {
        name: "Italian Pizza",
        country: "Origin: Italy",
        time: "About 40 minutes",
        ingredients: [
            "2 cups wheat flour",
            "1 teaspoon yeast",
            "Warm water",
            "Tomato sauce",
            "Mozzarella cheese",
            "Tomatoes",
            "Oregano"
        ],
        steps: [
            "Mix flour, yeast and warm water.",
            "Knead the dough and allow it to rise.",
            "Roll the dough into a pizza shape.",
            "Spread tomato sauce over it.",
            "Add cheese, tomatoes and oregano.",
            "Bake until the crust is golden and cheese melts."
        ]
    },

    pasta: {
        name: "Italian Pasta",
        country: "Origin: Italy",
        time: "About 25 minutes",
        ingredients: [
            "250g pasta",
            "2 tomatoes",
            "2 cloves garlic",
            "1 onion",
            "Tomato sauce",
            "Olive oil",
            "Grated cheese"
        ],
        steps: [
            "Boil pasta in salted water.",
            "Chop garlic, onion and tomatoes.",
            "Heat olive oil in a pan.",
            "Fry garlic and onion.",
            "Add tomatoes and tomato sauce.",
            "Add the cooked pasta and mix well.",
            "Serve with grated cheese."
        ]
    },

    paella: {
        name: "Spanish Paella",
        country: "Origin: Spain",
        time: "About 45 minutes",
        ingredients: [
            "2 cups short-grain rice",
            "200g shrimp",
            "200g mussels",
            "1 tomato",
            "1 onion",
            "Garlic",
            "Seafood stock",
            "Paprika and saffron"
        ],
        steps: [
            "Heat olive oil in a wide pan.",
            "Fry onion and garlic.",
            "Add tomato and paprika.",
            "Add rice and mix.",
            "Pour in seafood stock and saffron.",
            "Add shrimp and mussels.",
            "Cook until the rice is tender and seafood is fully cooked."
        ]
    },

    isombe: {
        name: "Rwandan Isombe",
        country: "Origin: Rwanda",
        time: "About 60–90 minutes",
        ingredients: [
            "500g cassava leaves",
            "1 onion",
            "2 cloves garlic",
            "Groundnut paste",
            "Water",
            "Salt",
            "Cooking oil"
        ],
        steps: [
            "Wash the cassava leaves carefully.",
            "Pound or blend the leaves until finely crushed.",
            "Cook the leaves thoroughly until tender.",
            "Add chopped onion and garlic.",
            "Mix in groundnut paste.",
            "Add salt and a little cooking oil.",
            "Continue cooking until soft and well combined.",
            "Serve Isombe on its own."
        ]
    },

    jollof: {
        name: "Nigerian Jollof Rice",
        country: "Origin: Nigeria",
        time: "About 50 minutes",
        ingredients: [
            "2 cups long-grain rice",
            "3 tomatoes",
            "1 red bell pepper",
            "1 onion",
            "Tomato paste",
            "Garlic",
            "Thyme and curry powder",
            "Vegetable stock"
        ],
        steps: [
            "Blend tomatoes and red bell pepper.",
            "Fry chopped onion in oil.",
            "Add tomato paste.",
            "Add the blended tomato mixture.",
            "Season with garlic, thyme and curry powder.",
            "Add stock and washed rice.",
            "Cover and cook until the rice is tender.",
            "Serve warm."
        ]
    },

    injera: {
        name: "Ethiopian Injera",
        country: "Origin: Ethiopia",
        time: "2–3 days fermentation, plus cooking",
        ingredients: [
            "2 cups teff flour",
            "Water",
            "A little salt"
        ],
        steps: [
            "Mix teff flour and water into a smooth batter.",
            "Cover and leave it to ferment for 2–3 days.",
            "Stir the fermented batter and add salt.",
            "Heat a non-stick pan.",
            "Pour a thin layer of batter into the pan.",
            "Cover and cook until holes appear and the surface sets.",
            "Remove carefully and serve with Ethiopian stews."
        ]
    },

    tacos: {
        name: "Mexican Tacos",
        country: "Origin: Mexico",
        time: "About 25 minutes",
        ingredients: [
            "6 small tortillas",
            "250g minced beef or chicken",
            "1 onion",
            "1 tomato",
            "Lettuce",
            "Cheese",
            "Taco seasoning"
        ],
        steps: [
            "Heat oil in a frying pan.",
            "Cook onion and minced meat thoroughly.",
            "Add taco seasoning.",
            "Warm the tortillas.",
            "Fill tortillas with the cooked meat.",
            "Add lettuce, tomato and cheese.",
            "Serve immediately."
        ]
    },

    burger: {
        name: "American Burger",
        country: "Origin: United States",
        time: "About 30 minutes",
        ingredients: [
            "2 burger buns",
            "250g ground beef",
            "2 slices cheese",
            "Lettuce",
            "Tomato",
            "Onion",
            "Burger sauce"
        ],
        steps: [
            "Season the ground beef.",
            "Shape the beef into patties.",
            "Cook the patties thoroughly.",
            "Add cheese and allow it to melt.",
            "Toast the burger buns.",
            "Spread sauce on the buns.",
            "Add lettuce, tomato, onion and the patty.",
            "Close the burger and serve."
        ]
    },

    enchiladas: {
        name: "Mexican Enchiladas",
        country: "Origin: Mexico",
        time: "About 40 minutes",
        ingredients: [
            "6 corn tortillas",
            "250g cooked shredded chicken",
            "1 onion",
            "Enchilada sauce",
            "Grated cheese",
            "Cooking oil"
        ],
        steps: [
            "Cook and shred the chicken.",
            "Fry chopped onion.",
            "Mix chicken with some enchilada sauce.",
            "Fill each tortilla with the chicken mixture.",
            "Roll the tortillas and place them in a baking dish.",
            "Pour the remaining sauce over them.",
            "Sprinkle cheese on top.",
            "Bake until the cheese melts."
        ]
    }

};


// ======================================
// 7. OPEN RECIPE
// ======================================

function openRecipe(food) {

    const recipe = recipes[food];

    if (!recipe) {
        alert("Recipe information not found.");
        return;
    }

    document.getElementById("recipeName").textContent =
        recipe.name;

    document.getElementById("recipeCountry").textContent =
        recipe.country;

    document.getElementById("recipeTime").textContent =
        recipe.time;

    document.getElementById("recipeIngredients").innerHTML =
        recipe.ingredients.map(item => `<li>${item}</li>`).join("");

    document.getElementById("recipeSteps").innerHTML =
        recipe.steps.map(step => `<li>${step}</li>`).join("");

    document.getElementById("recipeModal").style.display = "flex";

    document.body.style.overflow = "hidden";
}


// ======================================
// 8. CLOSE RECIPE
// ======================================

function closeRecipe() {

    document.getElementById("recipeModal").style.display = "none";

    document.body.style.overflow = "";

}


// CLOSE WHEN CLICKING OUTSIDE THE POPUP

const recipeModal = document.getElementById("recipeModal");

if (recipeModal) {

    recipeModal.addEventListener("click", function(event) {

        if (event.target === recipeModal) {
            closeRecipe();
        }

    });

}


// CLOSE WITH ESCAPE KEY

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeRecipe();
    }

});
