import { isSameAfterReversals } from './a-number-after-a-double-reversal';

describe('[Leetcode] isSameAfterReversals', () => {
  test('example #1', () => {
    expect(isSameAfterReversals(526)).toBe(true);
  });

  test('example #2', () => {
    expect(isSameAfterReversals(1800)).toBe(false);
  });

  test('example #3', () => {
    expect(isSameAfterReversals(0)).toBe(true);
  });

  test('example #4', () => {
    expect(isSameAfterReversals(609576)).toBe(true);
  });
});
