import { reverseWords } from './reverse-words-in-a-string';

describe('[Leetcode] reverseWords (reverse-words-in-a-string)', () => {
  test('example #1', () => {
    expect(reverseWords('the sky is blue')).toBe('blue is sky the');
  });

  test('example #2', () => {
    expect(reverseWords('  hello world!  ')).toBe('world! hello');
  });

  test('example #3', () => {
    expect(reverseWords('a good   example')).toBe('example good a');
  });
});
