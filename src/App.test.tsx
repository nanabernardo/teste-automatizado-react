const soma = (a: number, b: number) => {
  return a + b;
};

describe("Testes matemáticos", () => {
  test("Deve somar um número corretamente", () => {
    expect(soma(2, 2)).toBe(4);
  });
});
