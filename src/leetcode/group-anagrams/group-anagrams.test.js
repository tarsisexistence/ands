import { groupAnagrams } from './group-anagrams';

describe('[Leetcode] groupAnagrams', () => {
  test('example #1', () => {
    const output = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
    const expected = [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']];
    expect(output).toEqual(expected);
  });
});
