import { isBalanced } from './check-balanced-string';

describe('[Leetcode] isBalanced', () => {
  test('example #1', () => {
    expect(isBalanced('1234')).toBe(false);
  });

  test('example #2', () => {
    expect(isBalanced('24123')).toBe(true);
  });
});
