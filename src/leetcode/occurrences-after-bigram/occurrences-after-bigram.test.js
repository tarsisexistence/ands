import { findOccurrences } from './occurrences-after-bigram';

describe('[Leetcode] findOccurrences', () => {
  test('example #1', () => {
    expect(
      findOccurrences('alice is a good girl she is a good student', 'a', 'good')
    ).toEqual(['girl', 'student']);
  });

  test('example #2', () => {
    expect(findOccurrences('we will we will rock you', 'we', 'will')).toEqual([
      'we',
      'rock'
    ]);
  });
});
