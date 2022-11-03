import { maxCount } from './range-addition-ii';

describe('[Leetcode] maxCount', () => {
  test('example #1', () => {
    expect(
      maxCount(3, 3, [
        [2, 2],
        [3, 3]
      ])
    ).toBe(4);
  });

  test('example #2', () => {
    expect(
      maxCount(3, 3, [
        [2, 2],
        [3, 3],
        [3, 3],
        [3, 3],
        [2, 2],
        [3, 3],
        [3, 3],
        [3, 3],
        [2, 2],
        [3, 3],
        [3, 3],
        [3, 3]
      ])
    ).toBe(4);
  });

  test('example #3', () => {
    expect(maxCount(3, 3, [])).toBe(9);
  });

  test('example #4', () => {
    expect(
      maxCount(3, 3, [
        [3, 3],
        [3, 3],
        [2, 3]
      ])
    ).toBe(6);
  });

  test('example #5', () => {
    expect(
      maxCount(3, 3, [
        [2, 2],
        [3, 3],
        [2, 3]
      ])
    ).toBe(4);
  });
});
