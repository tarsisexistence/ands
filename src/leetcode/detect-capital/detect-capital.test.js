import { detectCapitalUse } from './detect-capital';

describe('[Leetcode] detectCapitalUse', () => {
  test('example #1', () => {
    expect(detectCapitalUse('USA')).toBe(true);
  });

  test('example #2', () => {
    expect(detectCapitalUse('FlaG')).toBe(false);
  });

  test('example #3', () => {
    expect(detectCapitalUse('usa')).toBe(true);
  });

  test('example #4', () => {
    expect(detectCapitalUse('usA')).toBe(false);
  });
});
