const square = require("./square");

test("Binh phuong cua 2", () => {
  expect(square(2)).toBe(4);
});
test("Binh phuong cua 8", () => {
    expect(square(8)).toBe(64);
  });

  test("Binh phuong cua 12", () => {
    expect(square(12)).toBe(144);
  });