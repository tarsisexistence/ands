import { digitCount } from './check-if-number-has-equal-digit-count-and-digit-value';

describe('[Leetcode] digitCount', () => {
  test('example #1', () => {
    expect(digitCount('1210')).toBe(true);
  });

  test('example #2', () => {
    expect(digitCount('030')).toBe(false);
  });

  test('example #3', () => {
    expect(digitCount('1')).toBe(false);
  });
});
