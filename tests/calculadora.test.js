const calculadora = require("../models/calculadora.js");

test("soma", () => {
  expect(calculadora.somar(1, 2)).toBe(3);
});

test("subtrai", () => {
  const resultado = calculadora.subtrair(5, 2);
  expect(resultado).toBe(3);
  console.log("Resultado foi: ", resultado);
});
