import { isSumEqual } from './check-if-word-equals-summation-of-two-words';

describe('[Leetcode] checkString', () => {
  test('example #1', () => {
    expect(isSumEqual('acb', 'cba', 'cdb')).toBe(true);
  });

  test('example #2', () => {
    expect(isSumEqual('aaa', 'a', 'aab')).toBe(false);
  });

  test('example #3', () => {
    expect(isSumEqual('aaa', 'a', 'aaaa')).toBe(true);
  });
});
