const saveCartItems = (ol) => {
  // seu código aqui
  localStorage.setItem('cartItems', ol.innerHTML);
  // console.log(localStorage);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
