import { removeAnagrams } from './find-resultant-array-after-removing-anagrams';

describe('[Leetcode] removeAnagrams', () => {
  test('example #1', () => {
    expect(removeAnagrams(['abba', 'baba', 'bbaa', 'cd', 'cd'])).toEqual(['abba', 'cd']);
  });

  test('example #2', () => {
    expect(removeAnagrams(['a', 'b', 'c', 'd', 'e'])).toEqual(['a', 'b', 'c', 'd', 'e']);
  });

  test('example #3', () => {
    expect(removeAnagrams(['a', 'b', 'a'])).toEqual(['a', 'b', 'a']);
  });
});
