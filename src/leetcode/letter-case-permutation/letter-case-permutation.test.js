import { letterCasePermutation } from './letter-case-permutation';

describe('[Leetcode] letterCasePermutation', () => {
  test('example #1', () => {
    expect(letterCasePermutation('a1b2')).toEqual(['a1b2', 'A1b2', 'a1B2', 'A1B2']);
  });

  test('example #2', () => {
    expect(letterCasePermutation('3z4')).toEqual(['3z4', '3Z4']);
  });

  test('example #3', () => {
    expect(letterCasePermutation('12345')).toEqual(['12345']);
  });
});
