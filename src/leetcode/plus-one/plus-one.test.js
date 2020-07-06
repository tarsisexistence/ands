import { plusOne } from './plus-one';

describe('[Leetcode] plusOne', () => {
  test('example #1', () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });

  test('example #2', () => {
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
  });

  test('example #3', () => {
    expect(plusOne([0, 4, 3, 2, 1])).toEqual([0, 4, 3, 2, 2]);
  });

  test('example #4', () => {
    expect(plusOne([4, 3, 2, 1, 0])).toEqual([4, 3, 2, 1, 1]);
  });

  test('example #5', () => {
    expect(plusOne([4, 3, 2, 1, 9])).toEqual([4, 3, 2, 2, 0]);
  });

  test('example #6', () => {
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });

  test('example #7', () => {
    expect(plusOne([0, 9, 9, 9])).toEqual([1, 0, 0, 0]);
  });
});
