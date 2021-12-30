import { sumBase } from './sum-of-digits-in-base-k';

describe('[Leetcode] sumBase', () => {
  test('example #1', () => {
    expect(sumBase(34, 6)).toBe(9);
  });

  test('example #2', () => {
    expect(sumBase(10, 10)).toBe(1);
  });
});
