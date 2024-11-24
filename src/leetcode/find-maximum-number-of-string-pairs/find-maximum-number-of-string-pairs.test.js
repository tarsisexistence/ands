import { maximumNumberOfStringPairs } from './find-maximum-number-of-string-pairs';

describe('[Leetcode] maximumNumberOfStringPairs', () => {
  test('example #1', () => {
    expect(maximumNumberOfStringPairs(['cd', 'ac', 'dc', 'ca', 'zz'])).toBe(2);
  });

  test('example #2', () => {
    expect(maximumNumberOfStringPairs(['ab', 'ba', 'cc'])).toBe(1);
  });

  test('example #3', () => {
    expect(maximumNumberOfStringPairs(['aa', 'ab'])).toBe(0);
  });
});
