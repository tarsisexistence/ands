import { maxProfit } from './best-time-to-buy-and-sell-stock';

describe('[Leetcode] maxProfit', () => {
  test('example #1', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  test('example #2', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  test('example #3', () => {
    expect(maxProfit([3, 2, 6, 5, 0, 3])).toBe(4);
  });
});
