import { areOccurrencesEqual } from './check-if-all-characters-have-equal-number-of-occurrences';

describe('[Leetcode] areOccurrencesEqual', () => {
  test('example #1', () => {
    expect(areOccurrencesEqual('abacbc')).toBe(true);
  });

  test('example #2', () => {
    expect(areOccurrencesEqual('aaabb')).toBe(false);
  });

  test('example #3', () => {
    expect(areOccurrencesEqual('vvvvvvvvvvvvvvvvvvv')).toBe(true);
  });
});
