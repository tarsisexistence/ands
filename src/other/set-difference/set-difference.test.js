import { setDifference } from './set-difference';

describe('[Other] set-difference', () => {
  test('example #1', () => {
    expect(setDifference([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 4, 5]);
  });
});
