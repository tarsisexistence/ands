import { stringShift } from './perform-string-shifts';

describe('[Leetcode] stringShift', () => {
  test('example #1', () => {
    expect(
      stringShift('abc', [
        [0, 1],
        [1, 2]
      ])
    ).toBe('cab');
  });

  test('example #2', () => {
    expect(
      stringShift('abcdefg', [
        [1, 1],
        [1, 1],
        [0, 2],
        [1, 3]
      ])
    ).toBe('efgabcd');
  });

  test('example #3', () => {
    expect(
      stringShift('abcdefg', [
        [0, 1],
        [1, 2]
      ])
    ).toBe('gabcdef');
  });
});
