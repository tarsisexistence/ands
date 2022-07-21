import { countElements } from './count-elements-with-strictly-smaller-and-greater-elements';

describe('[Leetcode] countElements', () => {
  test('example #1', () => {
    expect(countElements([11, 7, 2, 15])).toBe(2);
  });

  test('example #2', () => {
    expect(countElements([-3, 3, 3, 90])).toBe(2);
  });
});
