import { maxProduct } from './maximum-product-of-two-elements-in-an-array';

describe('[Leetcode] maxProduct', () => {
  test('example #1', () => {
    expect(maxProduct([3, 4, 5, 2])).toBe(12);
  });

  test('example #2', () => {
    expect(maxProduct([1, 5, 4, 5])).toBe(16);
  });

  test('example #3', () => {
    expect(maxProduct([3, 7])).toBe(12);
  });
});
