document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('filter-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const flavor = document.getElementById('flavor').value;
    const alcoholLevel = document.getElementById('alcoholLevel').value;
    fetch('/api/drinks')
      .then(response => response.json())
      .then(drinks => {
        const filteredDrinks = drinks.filter(drink => {
          return (!flavor || drink.flavor === flavor) && (!alcoholLevel || drink.alcoholLevel === alcoholLevel);
        });
        displayDrinks(filteredDrinks);
      });
  });

  const displayDrinks = (drinks) => {
    const drinksList = document.getElementById('drinks-list');
    drinksList.innerHTML = '';
    drinks.forEach(drink => {
      const drinkElement = document.createElement('div');
      drinkElement.classList.add('col-md-4', 'mb-4');
      drinkElement.innerHTML = `
        <div class="card h-100">
          <img src="images/${drink.image}" class="card-img-top" alt="${drink.name}">
          <div class="card-body">
            <h5 class="card-title">${drink.name}</h5>
            <p class="card-text">Ingredientes: ${drink.ingredients.join(', ')}</p>
          </div>
        </div>
      `;
      drinksList.appendChild(drinkElement);
    });
  };
});