import { maxDepth } from './maximum-nesting-depth-of-the-parentheses';

describe('[Leetcode] maxDepth', () => {
  test('example #1', () => {
    expect(maxDepth('(1+(2*3)+((8)/4))+1')).toBe(3);
  });

  test('example #2', () => {
    expect(maxDepth('(1)+((2))+(((3)))')).toBe(3);
  });

  test('example #3', () => {
    expect(maxDepth('1+(2*3)/(2-1)')).toBe(1);
  });

  test('example #4', () => {
    expect(maxDepth('1')).toBe(0);
  });
});
