import { kthDistinct } from './kth-distinct-string-in-an-array';

describe('[Leetcode] kthDistinct', () => {
  test('example #1', () => {
    expect(kthDistinct(['d', 'b', 'c', 'b', 'c', 'a'], 2)).toBe('a');
  });

  test('example #2', () => {
    expect(kthDistinct(['aaa', 'aa', 'a'], 1)).toBe('aaa');
  });

  test('example #3', () => {
    expect(kthDistinct(['a', 'b', 'a'], 3)).toBe('');
  });
});
