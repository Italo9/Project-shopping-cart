const fetchProducts = async (query) => {
  // seu código aqui
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
