import { uncommonFromSentences } from './uncommon-words-from-two-sentences';

describe('[Leetcode] uncommonFromSentences', () => {
  test('example #1', () => {
    expect(
      uncommonFromSentences('this apple is sweet', 'this apple is sour')
    ).toEqual(['sweet', 'sour']);
  });

  test('example #2', () => {
    expect(uncommonFromSentences('apple apple', 'banana')).toEqual(['banana']);
  });
});
