import { countPrefixes } from './count-prefixes-of-a-given-string';

describe('[Leetcode] countPrefixes', () => {
  test('example #1', () => {
    expect(countPrefixes(['a', 'b', 'c', 'ab', 'bc', 'abc'], 'abc')).toBe(3);
  });

  test('example #2', () => {
    expect(countPrefixes(['a', 'a'], 'aa')).toBe(2);
  });
});
