import { mergeAlternately } from './merge-strings-alternately';

describe('[Leetcode] mergeAlternately', () => {
  test('example #1', () => {
    expect(mergeAlternately('abc', 'pqr')).toBe('apbqcr');
  });

  test('example #2', () => {
    expect(mergeAlternately('ab', 'pqrs')).toBe('apbqrs');
  });

  test('example #3', () => {
    expect(mergeAlternately('abcd', 'pq')).toBe('apbqcd');
  });
});
