const ol = document.querySelector('.cart__items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

// fetchProducts('computador').then(console.log);
function buscaId(secao) {
  return secao.target.parentElement.firstElementChild.innerText;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // coloque seu código aqui event.target.remove 
  this.remove();
  saveCartItems(ol);
}

async function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  // const ol = document.querySelector('.cart__items');
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  ol.appendChild(li);
  return li;
}

// const Pc = await fetchProducts('computador');

async function somatorioItemCarrinho() {
  let cont = 0;
  const li = document.querySelectorAll('.cart__item');
  li.forEach((liPosicao) => {
    const array = liPosicao.innerText.split(':');
    const arrayPosicao = array[array.length - 1];
    // console.log('*' + arrayPosicao + '*');
    // const arrayPosicaoSem$ = arrayPosicao.replace();
    // console.log(arrayPosicaoSem$);
    const arrayNumero = parseFloat(arrayPosicao.replace('$', '').trim());
    console.log(arrayNumero);
    cont += arrayNumero;
  });
  const valorPc = document.querySelector('.total-price');
  valorPc.innerText = cont;
  console.log(cont);
}

async function botaoAddCarinho(event) {
  const arrayBotao = [...document.getElementsByClassName('item__add')];
  if (arrayBotao.includes(event.target)) {
    console.log(event);
    buscaId(event);
    const objPc = await fetchItem(buscaId(event));
    createCartItemElement(objPc);
  }
  saveCartItems(ol);
  somatorioItemCarrinho();
}

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  section.addEventListener('click', botaoAddCarinho);
  return section;
}

async function criarLista() {
  const secao = document.querySelector('.items');
  const objPc = await fetchProducts('computador');
  objPc.results.forEach((pcAtual) => {
    secao.appendChild(createProductItemElement(pcAtual));
  });
}

function esvaziarCarrinho() {
  const botaoEsvaziar = document.querySelector('.empty-cart');
  console.log(botaoEsvaziar);
  botaoEsvaziar.addEventListener('click', () => {
    ol.innerText = '';
  });
  console.log(botaoEsvaziar);
}

esvaziarCarrinho();
// .addEventListener('click', buscaId);
window.onload = () => {
  criarLista();
  getSavedCartItems(ol).childNodes.forEach((liCarrinho) => {
    liCarrinho.addEventListener('click', cartItemClickListener);
  });
};
