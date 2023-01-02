import { countDigits } from './count-the-digits-that-divide-a-number';

describe('[Leetcode] countDigits', () => {
  test('example #1', () => {
    expect(countDigits(7)).toBe(1);
  });

  test('example #2', () => {
    expect(countDigits(121)).toBe(2);
  });

  test('example #3', () => {
    expect(countDigits(1248)).toBe(4);
  });
});
