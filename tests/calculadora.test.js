test("Conferindo que 1 é 1", () => {
  var um = 1;
  expect(um).toBe(1);
});

test("Conferindo que 2 não é 1", () => {
  var dois = 2;
  expect(dois).not.toBe(1);
});
