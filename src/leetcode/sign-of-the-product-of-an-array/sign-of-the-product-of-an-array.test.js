import { arraySign } from './sign-of-the-product-of-an-array';

describe('[Leetcode] shuffle', () => {
  test('example #1', () => {
    expect(arraySign([-1, -2, -3, -4, 3, 2, 1])).toBe(1);
  });

  test('example #2', () => {
    expect(arraySign([1, 5, 0, 2, -3])).toBe(0);
  });

  test('example #3', () => {
    expect(arraySign([-1, 1, -1, 1, -1])).toBe(-1);
  });
});
