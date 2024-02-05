import { numSpecialEquivGroups } from './groups-of-special-equivalent-strings';

describe('[Leetcode] numSpecialEquivGroups', () => {
  test('example #1', () => {
    expect(numSpecialEquivGroups(['abcd', 'cdab', 'cbad', 'xyzz', 'zzxy', 'zzyx'])).toBe(3);
  });

  test('example #2', () => {
    expect(numSpecialEquivGroups(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])).toBe(3);
  });
});
