import { canConstruct } from './ransom-note';

describe('[Leetcode] canConstruct', () => {
  test('example #1', () => {
    expect(canConstruct('a', 'b')).toBeFalsy();
  });

  test('example #2', () => {
    expect(canConstruct('aa', 'ab')).toBeFalsy();
  });

  test('example #3', () => {
    expect(canConstruct('aa', 'aba')).toBeTruthy();
  });

  test('example #4', () => {
    expect(canConstruct('fihjjjjei', 'hjibagacbhadfaefdjaeaebgi')).toBeFalsy();
  });
});
