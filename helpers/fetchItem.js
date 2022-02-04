const fetchItem = async (itemId) => {
  // seu código aquihg
  const responde = await fetch(`https://api.mercadolibre.com/items/${itemId}`);
  const data = await responde.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
