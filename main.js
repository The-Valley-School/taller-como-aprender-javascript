let products = [{
  id: 1,
  name: 'Higuera',
  price: 79,
  urlImg: './assets/imgs/higuera.jpeg'
}, {
  id: 2,
  name: 'Lavanda',
  price: 109,
  urlImg: './assets/imgs/lavanda.jpeg'
}, {
  id: 3,
  name: 'Lila',
  price: 85,
  urlImg: './assets/imgs/lila.jpeg'
}, {
  id: 4,
  name: 'Naranjo',
  price: 85,
  urlImg: './assets/imgs/naranjo.jpeg'
}, {
  id: 5,
  name: 'Rosal',
  price: 109,
  urlImg: './assets/imgs/rosal.jpeg'
}];

// Esta función pinta todos los productos en el menú izquierdo
function renderProductList() {
}

// Esta función pinta un producto en el menú izquierdo
function renderProductInsideProductList(product) {
}

// Esta función pinta el detalle de un producto en el área principal
function renderProduct(item) {
}

// Función de compra: solo mostrará un mensaje :)
function purchase(item) {
}

// Esto inicializa nuestra aplicación:
// pinta el listado de productos y el detalle del primer producto del listado
document.addEventListener("DOMContentLoaded", function () {
  renderProductList();
  renderProduct(products[0]);
});
