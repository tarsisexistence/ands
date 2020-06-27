import { stringMatching } from './string-matching-in-an-array';

describe('[Leetcode] stringMatching', () => {
  test('example #1', () => {
    expect(stringMatching(['mass', 'as', 'hero', 'superhero'])).toEqual([
      'as',
      'hero'
    ]);
  });

  test('example #2', () => {
    expect(stringMatching(['leetcode', 'et', 'code'])).toEqual(['et', 'code']);
  });

  test('example #3', () => {
    expect(stringMatching(['blue', 'green', 'bu'])).toEqual([]);
  });

  test('example #4', () => {
    expect(stringMatching(['mass', 'as', 'ass', 'hero', 'superhero'])).toEqual([
      'as',
      'ass',
      'hero'
    ]);
  });
});
