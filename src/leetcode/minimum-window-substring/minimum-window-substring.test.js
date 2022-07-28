import { minWindow } from './minimum-window-substring';

describe('[Leetcode] minWindow', () => {
  test('example #1', () => {
    expect(minWindow('ADOBECODEBANC', 'ABC')).toBe('BANC');
  });

  test('example #2', () => {
    expect(minWindow('a', 'a')).toBe('a');
  });

  test('example #3', () => {
    expect(minWindow('a', 'aa')).toBe('');
  });
});
