const products = [
    { id: 1, name: "Eco-friendly Water Bottle", category: "Home", price: 15, tags: ["eco-friendly", "new"] },
    { id: 2, name: "Organic Cotton T-shirt", category: "Apparel", price: 25, tags: ["eco-friendly"] },
    { id: 3, name: "Wireless Headphones", category: "Electronics", price: 200, tags: ["new", "sale"] },
];

function renderProducts(products) {
    const productView = document.getElementById("products");
    productView.innerHTML = "";
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.innerHTML = `
            <p><b>Name:</b> ${product.name} | <b>Price:</b> ${product.price}£</p>
            <hr>
        `;
        productView.appendChild(productElement);
    });
}

function applyFilters() {
    const selectedCategory = document.getElementById("category").value;
    const selectedTags = Array.from(document.querySelectorAll("#tags input:checked")).map(checkbox => checkbox.value);
    let filteredProducts = products;
    if (selectedCategory) {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }
    if (selectedTags.length > 0) {
        filteredProducts = filteredProducts.filter(product => selectedTags.every(tag => product.tags.includes(tag)));
    }
    renderProducts(filteredProducts);
    if (filteredProducts.length === 0) {
        document.getElementById("products").innerHTML = "<p>No products found.</p>";
    }
}

document.getElementById("category").addEventListener("change", applyFilters);
document.querySelectorAll("#tags input[type='checkbox']").forEach(checkbox => {
    checkbox.addEventListener("change", applyFilters);
});

renderProducts(products);