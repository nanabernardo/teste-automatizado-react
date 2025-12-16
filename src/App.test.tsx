const soma = (a: number, b: number) => {
  return a + b;
};

describe("Testes matemáticos", () => { // "pasta" de testes
  test("Deve somar um número corretamente", () => {
    // assertion - expectativa
    expect(soma(2, 2)).toBe(4);
  });
});
