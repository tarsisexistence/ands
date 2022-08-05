import { calculateTax } from './calculate-amount-paid-in-taxes';

describe('[Leetcode] calculateTax', () => {
  test('example #1', () => {
    expect(
      calculateTax(
        [
          [3, 50],
          [7, 10],
          [12, 25]
        ],
        10
      )
    ).toBe(2.65);
  });

  test('example #2', () => {
    expect(
      calculateTax(
        [
          [1, 0],
          [4, 25],
          [5, 50]
        ],
        2
      )
    ).toBe(0.25);
  });
});
