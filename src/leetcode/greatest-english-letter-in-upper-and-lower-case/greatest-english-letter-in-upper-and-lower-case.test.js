import { greatestLetter } from './greatest-english-letter-in-upper-and-lower-case';

describe('[Leetcode] greatestLetter', () => {
  test('example #1', () => {
    expect(greatestLetter('lEeTcOdE')).toBe('E');
  });
  test('example #2', () => {
    expect(greatestLetter('arRAzFif')).toBe('R');
  });

  test('example #3', () => {
    expect(greatestLetter('AbCdEfGhIjK')).toBe('');
  });
});
