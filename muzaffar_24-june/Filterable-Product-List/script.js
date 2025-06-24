const apiUrl = "https://dummyjson.com";
const productGrid = document.getElementById("productGrid");
const categorySelect = document.getElementById("categorySelect");
const sortSelect = document.getElementById("sortSelect");
const searchInput = document.getElementById("search");

let products = [];


async function fetchProducts() {
  const res = await fetch(`${apiUrl}/products?limit=100`);
  const data = await res.json();
  products = data.products;
  applyFilters();
}



function renderProducts(list) {
  productGrid.innerHTML = list
    .map(
      (p) => `
    <div class="product-card" onclick="openModal(${p.id})">
      <img src="${p.images[0]}" alt="${p.title}" />
      <h3>${p.title}</h3>
      <p>$${p.price}</p>
    </div>
  `
    )
    .join("");
}


async function fetchCategories() {
  const res = await fetch(`${apiUrl}/products/categories`);
  const categories = await res.json();
  categorySelect.innerHTML =
    '<option value="all">All Categories</option>' +
    categories.map((c) => `<option value="${c.name}">${c.name}</option>`).join("");
}


function applyFilters() {
  let filtered = [...products];

  const query = searchInput.value.toLowerCase();
  if (query) {
    filtered = filtered.filter((p) => p.title.toLowerCase().includes(query));
  }

  const selectedCategory = categorySelect.value;
 
  if (selectedCategory !== "all") {
    filtered = filtered.filter((p) => p.category === selectedCategory.toLowerCase());
    
  }

  const sort = sortSelect.value;
  if (sort === "asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered.slice(0, 30)); 
}



window.openModal = async function (id) {
  const modal = document.getElementById("productModal");
  const data = await fetch(`${apiUrl}/products/${id}`).then((res) =>
    res.json()
  );

  document.getElementById("modalImage").src = data.images[0];
  document.getElementById("modalTitle").textContent = data.title;
  document.getElementById("modalDescription").textContent = data.description;
  document.getElementById("modalCategory").textContent = data.category;
  document.getElementById("modalPrice").textContent = `$${data.price}`;

  modal.classList.remove("hidden");
};


document.getElementById("modalClose").onclick = () => {
  document.getElementById("productModal").classList.add("hidden");
};


searchInput.addEventListener("input", applyFilters);
sortSelect.addEventListener("change", applyFilters);


categorySelect.addEventListener("change", async () => {
  await fetchProducts(categorySelect.value);
  applyFilters();
});


fetchCategories();
fetchProducts();
