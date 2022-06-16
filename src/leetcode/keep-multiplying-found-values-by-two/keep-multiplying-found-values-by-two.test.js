import { findFinalValue } from './keep-multiplying-found-values-by-two';

describe('[Leetcode] findFinalValue', () => {
  test('example #1', () => {
    expect(findFinalValue([5, 3, 6, 1, 12], 3)).toBe(24);
  });

  test('example #2', () => {
    expect(findFinalValue([2, 7, 9], 4)).toBe(4);
  });
});
