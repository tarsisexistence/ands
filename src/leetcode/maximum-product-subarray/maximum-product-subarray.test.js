import { maxProduct } from './maximum-product-subarray';

describe('[Leetcode] maxProduct', () => {
  test('example #1', () => {
    expect(maxProduct([2, 3, -2, 4])).toBe(6);
  });

  test('example #2', () => {
    expect(maxProduct([-2, 0, -1])).toBe(0);
  });

  test('example #3', () => {
    expect(maxProduct([-2, 3, -4])).toBe(24);
  });

  test('example #4', () => {
    expect(maxProduct([3, -1, 4])).toBe(4);
  });

  test('example #5', () => {
    expect(maxProduct([2, -5, -2, -4, 3])).toBe(24);
  });

  test('example #6', () => {
    expect(maxProduct([0, 2])).toBe(2);
  });
});
