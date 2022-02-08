const saveCartItems = (olInnerHTML) => {
  // seu código aqui
  localStorage.setItem('cartItems', olInnerHTML);
  // console.log(localStorage);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
