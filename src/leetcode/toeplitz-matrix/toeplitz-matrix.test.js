import { isToeplitzMatrix } from './toeplitz-matrix';

describe('[Leetcode] isToeplitzMatrix', () => {
  test('example #1', () => {
    expect(
      isToeplitzMatrix([
        [1, 2, 3, 4],
        [5, 1, 2, 3],
        [9, 5, 1, 2]
      ])
    ).toBeTruthy();
  });

  test('example #2', () => {
    expect(
      isToeplitzMatrix([
        [1, 2],
        [2, 2]
      ])
    ).toBeFalsy();
  });

  test('example #3', () => {
    expect(
      isToeplitzMatrix([
        [1, 2, 3, 4],
        [5, 1, 2, 3],
        [9, 5, 2, 2]
      ])
    ).toBeFalsy();
  });

  test('example #4', () => {
    expect(isToeplitzMatrix([[18], [66]])).toBeTruthy();
  });
});
