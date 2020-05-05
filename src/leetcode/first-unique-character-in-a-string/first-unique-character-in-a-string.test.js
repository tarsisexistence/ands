import { firstUniqChar } from './first-unique-character-in-a-string';

describe('[Leetcode] firstUniqChar', () => {
  test('example #1', () => {
    expect(firstUniqChar('leetcode')).toBe(0);
  });

  test('example #2', () => {
    expect(firstUniqChar('loveleetcode')).toBe(2);
  });

  test('example #3', () => {
    expect(firstUniqChar('cc')).toBe(-1);
  });
});
