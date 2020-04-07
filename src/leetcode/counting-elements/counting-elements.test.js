import { countElements } from './counting-elements';

describe('[Leetcode] countElements', () => {
  test('example #1', () => {
    expect(countElements([1, 2, 3])).toBe(2);
  });

  test('example #2', () => {
    expect(countElements([1, 1, 3, 3, 5, 5, 7, 7])).toBe(0);
  });

  test('example #3', () => {
    expect(countElements([1, 3, 2, 3, 5, 0])).toBe(3);
  });

  test('example #4', () => {
    expect(countElements([1, 1, 2, 2])).toBe(2);
  });

  test('example #5', () => {
    expect(countElements([1, 1, 2])).toBe(2);
  });
});
