const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  it('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado', () => {
    // simulo o dom criando um elemento que tem a propriedade inenerHtML PARA SOMENTE ASSIM A FUNÇÃO TER ALGUMA COISA PARA PODER ALTERAR tendo em vista que a funçao getSavedCartItems altera o innerHtml na linha 5 quando recebe as informações salvas no localStorage
    document.body.innerHTML = '<ol class="simulaDom"><li>Item</li></ol>'
    const simulandoDom = document.querySelector('.simulaDom');
    getSavedCartItems(simulandoDom);
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  it('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o cartItems como parâmetro', () => {
    document.body.innerHTML = '<ol class="simulaDom"><li>Item</li></ol>'
    const simulandoDom = document.querySelector('.simulaDom');
    getSavedCartItems(simulandoDom);
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
