const getSavedCartItems = (ol) => {
  // seu código aqui
  const copiaOl = ol;
  copiaOl.innerHTML = localStorage.getItem('cartItems');
  // console.log(copiaOl);
  // console.log(copiaOl.childNodes);
  return copiaOl;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
