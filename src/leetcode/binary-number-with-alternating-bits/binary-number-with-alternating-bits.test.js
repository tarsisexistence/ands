import { hasAlternatingBits } from './binary-number-with-alternating-bits';

describe('[Leetcode] hasAlternatingBits', () => {
  test('example #1', () => {
    expect(hasAlternatingBits(5)).toBe(true);
  });

  test('example #2', () => {
    expect(hasAlternatingBits(7)).toBe(false);
  });

  test('example #3', () => {
    expect(hasAlternatingBits(11)).toBe(false);
  });
});
