import { reverseWords } from './reverse-words-in-a-string-iii';

describe('[Leetcode] sortArrayByParity 3', () => {
  test('example #1', () => {
    expect(reverseWords("Let's take LeetCode contest")).toBe(
      "s'teL ekat edoCteeL tsetnoc"
    );
  });
});
