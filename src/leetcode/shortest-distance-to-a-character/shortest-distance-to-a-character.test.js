import { shortestToChar } from './shortest-distance-to-a-character';

describe('[Leetcode] shortestToChar', () => {
  test('example #1', () => {
    expect(shortestToChar('loveleetcode', 'e')).toEqual([3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]);
  });

  test('example #2', () => {
    expect(shortestToChar('aaba', 'b')).toEqual([2, 1, 0, 1]);
  });

  test('example #3', () => {
    expect(shortestToChar('abaa', 'b')).toEqual([1, 0, 1, 2]);
  });
});
