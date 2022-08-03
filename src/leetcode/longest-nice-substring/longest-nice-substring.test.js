import { longestNiceSubstring } from './longest-nice-substring';

describe('[Leetcode] longestNiceSubstring', () => {
  test('example #1', () => {
    expect(longestNiceSubstring('YazaAay')).toBe('aAa');
  });

  test('example #2', () => {
    expect(longestNiceSubstring('Bb')).toBe('Bb');
  });

  test('example #3', () => {
    expect(longestNiceSubstring('c')).toBe('');
  });

  test('example #4', () => {
    expect(longestNiceSubstring('FeOZJEnNfjz')).toBe('nN');
  });

  test('example #5', () => {
    expect(longestNiceSubstring('maxXa')).toBe('xX');
  });

  test('example #6', () => {
    expect(longestNiceSubstring('maxXaA')).toBe('axXaA');
  });

  test('example #7', () => {
    expect(longestNiceSubstring('ijIJwuUnW')).toBe('ijIJ');
  });

  test('example #8', () => {
    expect(longestNiceSubstring('xLeElzxgHzcWslEdgMGwEOZCXwwDMwcEhgJHLL')).toBe('LeEl');
  });

  test('example #9', () => {
    expect(longestNiceSubstring('dDzeE')).toBe('dD');
  });
});
