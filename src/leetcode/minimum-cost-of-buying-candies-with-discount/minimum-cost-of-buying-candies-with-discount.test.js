import { minimumCost } from './minimum-cost-of-buying-candies-with-discount';

describe('[Leetcode] minimumCost', () => {
  test('example #1', () => {
    expect(minimumCost([1, 2, 3])).toBe(5);
  });

  test('example #2', () => {
    expect(minimumCost([6, 5, 7, 9, 2, 2])).toBe(23);
  });

  test('example #3', () => {
    expect(minimumCost([5, 5])).toBe(10);
  });
});
