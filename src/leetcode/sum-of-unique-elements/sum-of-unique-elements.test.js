import { sumOfUnique } from './sum-of-unique-elements';

describe('[Leetcode] sumOfUnique', () => {
  test('example #1', () => {
    expect(sumOfUnique([1, 2, 3, 2])).toBe(4);
  });

  test('example #2', () => {
    expect(sumOfUnique([1, 1, 1, 1, 1])).toBe(0);
  });

  test('example #3', () => {
    expect(sumOfUnique([1, 2, 3, 4, 5])).toBe(15);
  });
});
