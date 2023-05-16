var categoryLinks = document.getElementById('categoryLinks');
var homeLink1 = document.getElementById('homeLink1');
var homeLink2 = document.getElementById('homeLink2');
fetchCategories();
categoryLinks.addEventListener('click', function(event) {
  event.preventDefault();
  var category = event.target.dataset.category;
  if (category === 'random') {
    fetchCategoryById(Math.floor(Math.random() * 3) + 1);
  } else {
    fetchCategoryById(category);
  }
});

homeLink1.addEventListener('click', function(event) {
    renderHomePage();
});

homeLink2.addEventListener('click', function(event) {
    renderHomePage();
});

function renderHomePage() {
  var categoryDiv = document.getElementById('category');
  categoryDiv.innerHTML = `
  <div class="p-5 mb-4 bg-light rounded-3">
  <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">Custom jumbotron</h1>
      <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the
          one in previous versions of Bootstrap. Check out the examples below for how you can remix and
          restyle it to your liking.</p>
      <button class="btn btn-primary btn-lg" type="button">Example button</button>
  </div>
</div>

<div class="row align-items-md-stretch">
  <div class="col-md-6">
      <div class="h-100 p-5 text-white bg-dark rounded-3">
          <h2>Change the background</h2>
          <p>Swap the background-color utility and add a color utility to mix up the jumbotron
              look. Then, mix and match with additional component themes and more.</p>
          <button class="btn btn-outline-light" type="button">Example button</button>
      </div>
  </div>
  <div class="col-md-6">
      <div class="h-100 p-5 bg-light border rounded-3">
          <h2>Add borders</h2>
          <p>Or, keep it light and add a border for some added definition to the boundaries of your
              content. Be sure to look under the hood at the source HTML here as we've adjusted the
              alignment and sizing of both column's content for equal-height.</p>
          <button class="btn btn-outline-secondary" type="button">Example button</button>
      </div>
  </div>
</div>
  `;
  var itemsDiv = document.getElementById('items');
  itemsDiv.innerHTML = '';
}

function renderLinks(categories) {
  categories.forEach(category => {
    category = `
    <li><a class="dropdown-item" href="#" data-category="${category.id}">${category.shortname}</a></li>
    `;
    categoryLinks.innerHTML += category;
  });
  category = `
    <li><a class="dropdown-item" href="#" data-category="random">Specials</a></li>
  `;
  categoryLinks.innerHTML += category;
}

function fetchCategories() {
  fetch('categories.json')
    .then(response => response.json())
    .then(data => {
      renderLinks(data.categories);
    })
    .catch(error => console.error(error));
}

function fetchCategoryById(categoryId) {
  fetch('category' + categoryId + '.json')
    .then(response => response.json())
    .then(data => {
      renderCategory(data.category);
      renderItems(data.items);
    })
    .catch(error => console.error(error));
}

function renderCategory(category) {
  var categoryDiv = document.getElementById('category');
  categoryDiv.innerHTML = `
    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">${category.name}</h1>
        <p class="col-md-8 fs-4">${category.notes}</p>
      </div>
    </div>
  `;
}

function renderItems(items) {
  var itemsDiv = document.getElementById('items');
  var itemsHTML = '';
  items.forEach(item => {
    itemsHTML += `
    <div class="card" style="width: 200px;">
    <img class="card-img-top" src="${item.photo + "&text=" + item.shortname + "&fontsize=16"}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.description}</p>
    </div>
    <div class="card-footer"><strong>Price: $${item.price}</strong></div>
  </div>
    `;
  });
  itemsDiv.innerHTML = itemsHTML;
}

// Initial home page rendering
renderHomePage();