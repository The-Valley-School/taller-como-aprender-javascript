let products = [
  {
    id: 1,
    name: 'Higuera',
    price: 79,
    urlImg: './assets/imgs/higuera.jpeg'
  },
  {
    id: 2,
    name: 'Lavanda',
    price: 109,
    urlImg: './assets/imgs/lavanda.jpeg'
  },
  {
    id: 3,
    name: 'Lila',
    price: 85,
    urlImg: './assets/imgs/lila.jpeg'
  },
  {
    id: 4,
    name: 'Naranjo',
    price: 85,
    urlImg: './assets/imgs/naranjo.jpeg'
  },
  {
    id: 5,
    name: 'Rosal',
    price: 109,
    urlImg: './assets/imgs/rosal.jpeg'
  }
];

let elementProductList;
let elementProduct;

function renderProductList() {
  for (let i = 0; i < products.length; i++) {
    let elementBtn = document.createElement('button');
    elementBtn.textContent = products[i].name;
    elementBtn.classList.add('btn');
    elementBtn.addEventListener('click', function () { renderProduct(products[i]) });
    elementProductList.appendChild(elementBtn);
  }
}

function renderProduct(item) {
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
  elementProductBtn.addEventListener('click', purchase);

  elementProduct.appendChild(elementProductImg);
  elementProduct.appendChild(elementProductPrice);
  elementProduct.appendChild(elementProductBtn);
}

function purchase() {
  alert("Gracias por comprar en nuestra web!");
}

document.addEventListener("DOMContentLoaded", function () {
  elementProductList = document.querySelector('.productList');
  elementProduct = document.querySelector('.product');

  renderProductList();
  renderProduct(products[0]);
});
