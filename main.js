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
  for (let i = 0; i < products.length; i++) {
    renderProductInsideProductList(products[i]);
  }
}

// Esta función pinta un producto en el menú izquierdo
function renderProductInsideProductList(product) {
  let elementBtn = document.createElement('button');
  elementBtn.textContent = product.name;
  elementBtn.classList.add('btn');
  elementBtn.addEventListener('click', function () { renderProduct(product) });
  let elementProductList = document.querySelector('.productList');
  elementProductList.appendChild(elementBtn);
}

// Esta función pinta el detalle de un producto en el área principal
function renderProduct(item) {
  let elementProduct = document.querySelector('.product');
  elementProduct.textContent = '';
  let elementProductImg = document.createElement('img');
  elementProductImg.setAttribute('src', item.urlImg);
  elementProductImg.classList.add('img-product');

  let elementProductPrice = document.createElement('p');
  elementProductPrice.textContent = item.price + '€';
  elementProductPrice.classList.add('price-product');

  let elementProductBtn = document.createElement('button');
  elementProductBtn.textContent = 'COMPRAR';
  elementProductBtn.classList.add('btn-product');
  elementProductBtn.addEventListener('click', function () { purchase(item) });

  elementProduct.appendChild(elementProductImg);
  elementProduct.appendChild(elementProductPrice);
  elementProduct.appendChild(elementProductBtn);
}

// Función de compra: solo mostrará un mensaje :)
function purchase(item) {
  let elementProduct = document.querySelector('.product');
  elementProduct.textContent = '';
  let elementPurchase = document.createElement('p');
  let message = 'Gracias por comprar nuestro/a ' + item.name;
  elementPurchase.textContent = message;
  elementProduct.appendChild(elementPurchase);
}

// Esto inicializa nuestra aplicación:
// pinta el listado de productos y el detalle del primer producto del listado
document.addEventListener("DOMContentLoaded", function () {
  renderProductList();
  renderProduct(products[0]);
});
