import { convertToBase7 } from './base-7';

describe('[Leetcode] convertToBase7', () => {
  test('example #1', () => {
    expect(convertToBase7(100)).toBe('202');
  });

  test('example #2', () => {
    expect(convertToBase7(-7)).toBe('-10');
  });

  test('example #3', () => {
    expect(convertToBase7(7)).toBe('10');
  });

  test('example #4', () => {
    expect(convertToBase7(6)).toBe('6');
  });
});
