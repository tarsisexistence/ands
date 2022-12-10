import { deleteGreatestValue } from './delete-greatest-value-in-each-row';

describe('[Leetcode] deleteGreatestValue', () => {
  test('example #1', () => {
    expect(
      deleteGreatestValue([
        [1, 2, 4],
        [3, 3, 1]
      ])
    ).toBe(8);
  });

  test('example #2', () => {
    expect(deleteGreatestValue([[10]])).toBe(10);
  });
});
