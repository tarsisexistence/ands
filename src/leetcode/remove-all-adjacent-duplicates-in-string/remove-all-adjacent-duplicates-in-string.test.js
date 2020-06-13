import { removeDuplicates } from './remove-all-adjacent-duplicates-in-string';

describe('[Leetcode] removeDuplicates', () => {
  test('example #1', () => {
    expect(removeDuplicates('abbaca')).toBe('ca');
  });

  test('example #2', () => {
    expect(removeDuplicates('abbbaca')).toBe('abaca');
  });
});
