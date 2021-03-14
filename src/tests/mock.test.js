/* eslint-disable no-undef */
const sum = (a, b) => a + b;
describe("mock test", () => {
  it("sum", () => {
    const response = sum(2, 2);
    expect(response).toEqual(4);
  });
});
