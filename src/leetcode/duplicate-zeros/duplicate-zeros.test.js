import { duplicateZeros } from './duplicate-zeros';

describe('[Leetcode] duplicateZeros', () => {
  test('example #1', () => {
    const arr = [1, 0, 2, 3, 0, 4, 5, 0];
    duplicateZeros(arr);
    expect(arr).toEqual([1, 0, 0, 2, 3, 0, 0, 4]);
  });

  test('example #2', () => {
    const arr = [1, 2, 3];
    duplicateZeros(arr);
    expect(arr).toEqual([1, 2, 3]);
  });

  test('example #3', () => {
    const arr = [0, 0, 0, 0, 0, 0, 0];
    duplicateZeros(arr);
    expect(arr).toEqual([0, 0, 0, 0, 0, 0, 0]);
  });
});
