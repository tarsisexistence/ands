import { maxProfit } from './best-time-to-buy-and-sell-stock-ii';

describe('[Leetcode] maxProfit-ii', () => {
  test('example #1', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
  });

  test('example #2', () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  });

  test('example #3', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  test('example #4', () => {
    expect(maxProfit([2, 1, 2, 0, 1])).toBe(2);
  });
});
