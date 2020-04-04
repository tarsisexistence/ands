import { maximumProduct } from './maximum-product-of-three-numbers';

describe('[Leetcode] maximumProduct', () => {
  test('example #1', () => {
    expect(maximumProduct([1, 2, 3])).toBe(6);
  });

  test('example #2', () => {
    expect(maximumProduct([1, 2, 3, 4])).toBe(24);
  });

  test('example #3', () => {
    expect(maximumProduct([-1, -2, 1, 2, 3])).toBe(6);
  });

  test('example #4', () => {
    expect(maximumProduct([-4, -3, -2, -1, 60])).toBe(720);
  });
});
