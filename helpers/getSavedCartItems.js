const getSavedCartItems = (ol) => {
  // seu código aqui
  const copiaOl = ol;
  console.log(typeof copiaOl);
  copiaOl.innerHTML = localStorage.getItem('cartItems');
  console.log(typeof copiaOl);
  // console.log(copiaOl.childNodes);
  return copiaOl;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
