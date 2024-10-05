import { sumOfMultiples } from './sum-multiples';

describe('[Leetcode] sumOfMultiples', () => {
  test('example #1', () => {
    expect(sumOfMultiples(7)).toBe(21);
  });

  test('example #2', () => {
    expect(sumOfMultiples(10)).toBe(40);
  });

  test('example #3', () => {
    expect(sumOfMultiples(9)).toBe(30);
  });
});
