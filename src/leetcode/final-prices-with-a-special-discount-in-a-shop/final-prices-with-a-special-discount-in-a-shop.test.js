import { finalPrices } from './final-prices-with-a-special-discount-in-a-shop';

describe('[Leetcode] finalPrices', () => {
  test('example #1', () => {
    expect(finalPrices([8, 4, 6, 2, 3])).toEqual([4, 2, 4, 2, 3]);
  });

  test('example #2', () => {
    expect(finalPrices([8, 4, 4, 3, 3])).toEqual([4, 0, 1, 0, 3]);
  });

  test('example #3', () => {
    expect(finalPrices([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('example #4', () => {
    expect(finalPrices([10, 1, 1, 6])).toEqual([9, 0, 1, 6]);
  });

  test('example #5', () => {
    expect(finalPrices([10, 2, 5, 2, 8])).toEqual([8, 0, 3, 2, 8]);
  });
});
