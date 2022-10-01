import { countQuadruplets } from './count-special-quadruplets';

describe('[Leetcode] countQuadruplets', () => {
  test('example #1', () => {
    expect(countQuadruplets([1, 2, 3, 6])).toBe(1);
  });

  test('example #2', () => {
    expect(countQuadruplets([3, 3, 6, 4, 5])).toBe(0);
  });

  test('example #3', () => {
    expect(countQuadruplets([1, 1, 1, 3, 5])).toBe(4);
  });
});
