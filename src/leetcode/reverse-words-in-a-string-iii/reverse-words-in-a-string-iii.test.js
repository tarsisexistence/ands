import { reverseWords } from './reverse-words-in-a-string-iii';

describe('[Leetcode] sortArrayByParityII', () => {
  test('example #1', () => {
    expect(reverseWords("Let's take LeetCode contest")).toEqual(
      "s'teL ekat edoCteeL tsetnoc"
    );
  });
});
