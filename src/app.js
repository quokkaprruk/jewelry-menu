// Function to create a product card based on the product object
function createProductCard(product) {
  /*<div id="product-card"></div>*/
  const productCard = document.createElement("div");
  productCard.setAttribute("id", "product-card");

  /*<img src="..." alt="..."></img>*/
  const image = document.createElement("img");
  image.setAttribute("src", product.imageUrl);
  image.setAttribute("alt", product.title);

  /*<h3> Product Title </h3>*/
  const title = document.createElement("h3");
  title.innerText = product.title;

  /*<p> Product Desc </p>*/
  const description = document.createElement("p");
  description.innerText = product.description;

  /*<span> Product Price </span>*/
  const price = document.createElement("span");
  price.innerText = `$${(product.price / 100).toFixed(2)}`;

  productCard.appendChild(image);
  productCard.appendChild(title);
  productCard.appendChild(description);
  productCard.appendChild(price);

  return productCard;
}

document.addEventListener("DOMContentLoaded", function () {
  const { products, categories } = window;
  /*Select this id <div id="menu"></div>*/
  const menu = document.querySelector("#menu");
  /*Select this id <div id="product-card-container"></div>*/
  const productCardContainer = document.querySelector(
    "#product-card-container"
  );

  function createCategoryButton() {
    allProductButtons();
    //category button
    categories.forEach((category) => {
      /*<button> Button name </button> */
      const button = document.createElement("button");
      button.innerText = category.name;
      /*add event */
      button.addEventListener("click", () => {
        productCardContainer.innerHTML = "";

        displayProduct(category);
        // allProductButtons();
        // Remove the all-products-button class from the "All Products" button
        const allProductsButton = document.querySelector(
          ".all-products-button"
        );
        if (allProductsButton) {
          allProductsButton.classList.remove("all-products-button");
        }
      });

      /*append to #menu */
      menu.appendChild(button);
    });
  }

  function allProductButtons() {
    //all product button
    const allProductsButton = document.createElement("button");
    allProductsButton.innerText = "All Products";
    /*add event*/
    allProductsButton.addEventListener("click", () => {
      productCardContainer.innerHTML = "";

      displayProductForAll();
    });
    /*append to #menu */
    menu.appendChild(allProductsButton);
  }

  function displayProduct(category) {
    /*set #product-card-container empty */
    productCardContainer.innerHTML = "";
    // showCateType(category.name);
    const filterProducts = products.filter(
      (product) =>
        product.categories.includes(category.id) && !product.discontinued
    );
    filterProducts.forEach((product) => {
      const productCard = createProductCard(product);
      productCardContainer.appendChild(productCard);
    });
  }

  function displayProductForAll() {
    // Sort the products by title in alphabetical order (A-Z)
    const sortedProducts = products
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title));

    // Clear the productCardContainer before displaying the sorted products
    productCardContainer.innerHTML = "";

    // Loop through the sorted products and create product cards
    sortedProducts.forEach((product) => {
      const productCard = createProductCard(product);
      productCardContainer.appendChild(productCard);
    });
  }

  function Defaultdisplay() {
    productCardContainer.innerHTML = "";
    // showCateType("All Products");

    // Create a new array with products in reverse order
    const reversedProducts = products.slice().reverse();

    reversedProducts.forEach((product) => {
      const productCard = createProductCard(product);
      productCardContainer.appendChild(productCard);
    });
  }

  createCategoryButton(); //if click show product

  Defaultdisplay();
});
