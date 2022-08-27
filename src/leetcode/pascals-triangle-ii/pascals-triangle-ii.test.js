import { getRow } from './pascals-triangle-ii';

describe('[Leetcode] getRow', () => {
  test('example #1', () => {
    expect(getRow(3)).toEqual([1, 3, 3, 1]);
  });

  test('example #2', () => {
    expect(getRow(0)).toEqual([1]);
  });

  test('example #3', () => {
    expect(getRow(1)).toEqual([1, 1]);
  });
});
