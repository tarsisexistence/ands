import { isAnagram } from './valid-anagram';

describe('[Leetcode] isAnagram', () => {
  test('example #1', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });

  test('example #2', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
  });
});
