import { projectionArea } from './projection-area-of-3d-shapes';

describe('[Leetcode] projectionArea', () => {
  test('example #1', () => {
    expect(projectionArea([[2]])).toBe(5);
  });

  test('example #2', () => {
    expect(
      projectionArea([
        [1, 2],
        [3, 4]
      ])
    ).toBe(17);
  });

  test('example #3', () => {
    expect(
      projectionArea([
        [1, 0],
        [0, 2]
      ])
    ).toBe(8);
  });

  test('example #4', () => {
    expect(
      projectionArea([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
      ])
    ).toBe(14);
  });

  test('example #5', () => {
    expect(
      projectionArea([
        [2, 2, 2],
        [2, 1, 2],
        [2, 2, 2]
      ])
    ).toBe(21);
  });
});
