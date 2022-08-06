import { canConstruct } from './ransom-note';

describe('[Leetcode] canConstruct', () => {
  test('example #1', () => {
    expect(canConstruct('a', 'b')).toBe(false);
  });

  test('example #2', () => {
    expect(canConstruct('aa', 'ab')).toBe(false);
  });

  test('example #3', () => {
    expect(canConstruct('aa', 'aba')).toBe(true);
  });

  test('example #4', () => {
    expect(canConstruct('fihjjjjei', 'hjibagacbhadfaefdjaeaebgi')).toBe(false);
  });
});
