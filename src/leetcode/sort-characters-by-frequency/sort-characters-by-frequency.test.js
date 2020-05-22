import { frequencySort } from './sort-characters-by-frequency';

describe('[Leetcode] frequencySort', () => {
  test('example #1', () => {
    expect(frequencySort('tree')).toBe('eetr');
  });

  test('example #2', () => {
    expect(frequencySort('cccaaa')).toBe('cccaaa');
  });

  test('example #3', () => {
    expect(frequencySort('Aabb')).toBe('bbaA');
  });

  test('example #4', () => {
    expect(frequencySort('loveleetcode')).toBe('eeeeoollvtdc');
  });
});
