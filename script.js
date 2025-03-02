// Array of recipes (temporary, later replaced with data from .NET MVC)
const recipes = [
  {
    id: 1,
    title: "Meatballs",
    image: "images/food1.jpg",
    description:
      "Juicy little sheet pan meatballs that are salty, zesty, briney, and so so delicious.",
  },
  {
    id: 2,
    title: "Grilled Chicken",
    image: "images/food2.jpg",
    description: "Juicy and flavorful grilled chicken.",
  },
  {
    id: 3,
    title: "BBQ Salmon Bowls",
    image: "images/food3.jpg",
    description:
      "n easy and impressive dinner with yummy smoky-sweet flavor and a zip of zesty homemade salsa to take it over the top.",
  },
  {
    id: 4,
    title: "Avocado Toast",
    image: "images/food4.jpg",
    description: "Healthy and tasty breakfast option.",
  },
];

// Function to display recipes
function displayRecipes(filter = "") {
  const recipeList = document.getElementById("recipeList"); // Finds the recipeList container in the HTML
  recipeList.innerHTML = ""; // Clears the previous content before displaying new recipes

  recipes.forEach((recipe) => {
    if (recipe.title.toLowerCase().includes(filter.toLowerCase())) {
      // Checks if the recipe title matches the search filter:
      recipeList.innerHTML += `  
                <div class="col-md-3 mb-4">
                    <div class="card h-100">
                        <img src="${recipe.image}" class="card-img-top" alt="${recipe.title}">
                        <div class="card-body">
                            <h5 class="card-title">${recipe.title}</h5>
                            <p class="card-text">${recipe.description}</p>
                            <a href="recipe-details.html?recipeId=${recipe.id}" class="btn btn-outline-success bg-mycolor text-white my-2">View Recipe</a> 
                        </div>
                    </div>
                </div>
            `;
    }
  });
}

// Function to filter recipes based on search input
function searchRecipes() {
  const searchInput = document.getElementById("searchInput").value;
  displayRecipes(searchInput);
}

function redirectToSearch() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    window.location.href = `recipes.html`;
  }
}

// Load recipes on page load
window.onload = () => displayRecipes();
