const {sum, myRemove, myFizzBuzz} = require('./exercicio7-3');


describe('the function of sum', () => {
  test('4+5 equal to 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('0+0 euqal to 0', () => {
    expect(sum(0, 0)).toBe(0); 
  });

  test('Lança um erro se um dos valores for inválido', () => {
    expect(() => {sum(4, '5')}).toThrowError();
  });

  test('Lança mensagem "parameters must be numbers"', () => {
    expect(() => {sum(4, '5')}).toThrowError(Error);
  });
})

describe('the function of myRemove', () => {
  test('Deve retornar um array removendo o item correto', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('Não deve retornar o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('Deve retornar o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
