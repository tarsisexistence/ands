import { productExceptSelf } from './product-of-array-except-self';

describe('[Leetcode] productExceptSelf', () => {
  test('example #1', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  test('example #2', () => {
    expect(productExceptSelf([1, 2, 3, 0, 4])).toEqual([0, 0, 0, 24, 0]);
  });

  test('example #3', () => {
    expect(productExceptSelf([1, 2, 3, 0, 0, 4])).toEqual([0, 0, 0, 0, 0, 0]);
  });
});
