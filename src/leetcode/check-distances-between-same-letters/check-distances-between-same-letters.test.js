import { checkDistances } from './check-distances-between-same-letters';

describe('[Leetcode] checkDistances', () => {
  test('example #1', () => {
    expect(
      checkDistances('abaccb', [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    ).toBe(true);
  });

  test('example #2', () => {
    expect(checkDistances('aa', [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(
      false
    );
  });

  test('example #3', () => {
    expect(checkDistances('zz', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])).toBe(
      false
    );
  });
});
