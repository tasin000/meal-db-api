searchFoods = () => {
    const cards = document.getElementById('cards');
    const food = document.getElementById('search-food');
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food.value}`;
    fetch(url)
        .then(response => response.json())
        .then(data => newFood(data.meals))
    food.value = '';
    cards.textContent = '';
}
searchFoods();

newFood = (foods) => {
    foods.map((x) => {
        const parentDiv = document.getElementById('cards')
        const newCard = document.createElement('div')
        newCard.innerHTML = `
            <div class="col">
                <div class="card h-100">
                    <img src="${x.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Meal ID: ${x.idMeal}</h5>
                        <h5 class="card-title">${x.strMeal}</h5>
                        <p class="card-text">${x.strArea} Food <br/> Category: ${x.strCategory}</p>
                        <button class="btn btn-outline-primary my-2" onclick="window.open('${x.strSource}')">More Details</button>
                        <button class="btn btn-outline-primary" onclick="window.open('${x.strYoutube}')">Learn How to Cook</button>
                    </div>
                </div>
            </div>`
        parentDiv.appendChild(newCard);
        console.log(foods)
    })
}