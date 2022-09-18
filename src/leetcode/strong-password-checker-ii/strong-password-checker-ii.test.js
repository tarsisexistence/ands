import { strongPasswordCheckerII } from './strong-password-checker-ii';

describe('[Leetcode] strongPasswordCheckerII', () => {
  test('example #1', () => {
    expect(strongPasswordCheckerII('IloveLe3tcode!')).toBe(true);
  });

  test('example #2', () => {
    expect(strongPasswordCheckerII('Me+You--IsMyDream')).toBe(false);
  });

  test('example #3', () => {
    expect(strongPasswordCheckerII('1aB!')).toBe(false);
  });
});
