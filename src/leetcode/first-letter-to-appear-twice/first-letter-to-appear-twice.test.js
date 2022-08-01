import { repeatedCharacter } from './first-letter-to-appear-twice';

describe('[Leetcode] repeatedCharacter', () => {
  test('example #1', () => {
    expect(repeatedCharacter('abccbaacz')).toBe('c');
  });

  test('example #2', () => {
    expect(repeatedCharacter('abcdd')).toBe('d');
  });
});
