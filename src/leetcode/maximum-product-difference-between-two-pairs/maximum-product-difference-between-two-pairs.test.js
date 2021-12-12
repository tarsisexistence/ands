import { maxProductDifference } from './maximum-product-difference-between-two-pairs';

describe('[Leetcode] maxProductDifference', () => {
  test('example #1', () => {
    expect(maxProductDifference([5, 6, 2, 7, 4])).toBe(34);
  });

  test('example #2', () => {
    expect(maxProductDifference([4, 2, 5, 9, 7, 4, 8])).toBe(64);
  });

  test('example #3', () => {
    expect(maxProductDifference([5, 9, 4, 6])).toBe(34);
  });

  test('example #4', () => {
    expect(maxProductDifference([1, 6, 7, 5, 2, 4, 10, 6, 4])).toBe(68);
  });
});
