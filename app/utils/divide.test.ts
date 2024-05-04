import { division } from "./divide";

test("Test Division", () => {
  expect(division(2, 1)).toBe(2);
});

test("Test Division Ta mala", () => {
    expect(division(2, 0)).toBe("ta malooooooo");
  });
  