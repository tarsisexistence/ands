import { countConsistentStrings } from './count-the-number-of-consistent-strings';

describe('[Leetcode] countConsistentStrings', () => {
  test('example #1', () => {
    expect(countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab'])).toBe(2);
  });

  test('example #2', () => {
    expect(countConsistentStrings('abc', ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'])).toBe(7);
  });

  test('example #3', () => {
    expect(countConsistentStrings('cad', ['cc', 'acd', 'b', 'ba', 'bac', 'bad', 'ac', 'd'])).toBe(4);
  });
});
