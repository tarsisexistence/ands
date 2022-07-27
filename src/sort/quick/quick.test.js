import { quicksort } from './quick.sort';

describe('[Sort] quick', () => {
  test('should sort array', () => {
    const unsorted = [1, 3, 5, 4, 2];
    const sorted = [1, 2, 3, 4, 5];
    expect(quicksort(unsorted)).toEqual(sorted);
  });

  test('should return already sorted array without changes', () => {
    const sorted = [1, 2, 3, 4, 5];
    expect(quicksort(sorted)).toEqual(sorted);
  });

  test('should return sorted array when array is sorted in reverse order', () => {
    const unsorted = [5, 4, 3, 2, 1];
    const sorted = [1, 2, 3, 4, 5];
    expect(quicksort(unsorted)).toEqual(sorted);
  });

  test('should return sorted array with repeated values', () => {
    const unsorted = [5, 4, 3, 7, 9, 4];
    const sorted = [3, 4, 4, 5, 7, 9];
    expect(quicksort(unsorted)).toEqual(sorted);
  });

  test('should return same short array of 1 value', () => {
    const unsorted = [5];
    const sorted = [5];
    expect(quicksort(unsorted)).toEqual(sorted);
  });

  test('should return same short array of 2 values', () => {
    const unsorted = [4, 5];
    const sorted = [4, 5];
    expect(quicksort(unsorted)).toEqual(sorted);
  });

  test('should sort short array of 2 values', () => {
    const unsorted = [5, 4];
    const sorted = [4, 5];
    expect(quicksort(unsorted)).toEqual(sorted);
  });

  test('should sort random array #1', () => {
    const unsorted = [-2, 3, -1, 5, 4, -3, 0];
    const sorted = [-3, -2, -1, 0, 3, 4, 5];
    expect(quicksort(unsorted)).toEqual(sorted);
  });

  test('should sort random array #2', () => {
    const unsorted = [1, 2, 8, 7, 9, 3, 13, 4];
    const sorted = [1, 2, 3, 4, 7, 8, 9, 13];
    expect(quicksort(unsorted)).toEqual(sorted);
  });
});
