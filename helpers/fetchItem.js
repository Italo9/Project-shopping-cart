const fetchItem = async (itemId) => {
  // seu código aquihg
  try {
    const responde = await fetch(`https://api.mercadolibre.com/items/${itemId}`);
    const data = await responde.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
