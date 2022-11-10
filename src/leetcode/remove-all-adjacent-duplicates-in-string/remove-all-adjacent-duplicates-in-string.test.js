import { removeDuplicates } from './remove-all-adjacent-duplicates-in-string';

describe('[Leetcode] removeDuplicates (all adjacent)', () => {
  test('example #1', () => {
    expect(removeDuplicates('abbaca')).toBe('ca');
  });

  test('example #2', () => {
    expect(removeDuplicates('abbbaca')).toBe('abaca');
  });

  test('example #3', () => {
    expect(removeDuplicates('abbbaca')).toBe('abaca');
  });

  test('example #4', () => {
    expect(removeDuplicates('abbacab')).toBe('cab');
  });

  test('example #5', () => {
    expect(removeDuplicates('babacab')).toBe('babacab');
  });
});
