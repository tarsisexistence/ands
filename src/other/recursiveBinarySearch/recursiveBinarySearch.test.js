import { recursiveBinarySearch } from './recursiveBinarySearch';

describe('[Other] recursiveBinarySearch', () => {
  test('example #1', () => {
    expect(recursiveBinarySearch([3, 4, 5], 5)).toBe(2);
  });

  test('example #2', () => {
    expect(recursiveBinarySearch([3, 4, 5], 6)).toBe(-1);
  });

  test('example #3', () => {
    expect(recursiveBinarySearch([3, 4, 5, 6], 6)).toBe(3);
  });

  test('example #4', () => {
    expect(recursiveBinarySearch([3, 4, 5, 6], 7)).toBe(-1);
  });

  test('example #5', () => {
    expect(recursiveBinarySearch([3, 4, 5, 6], 0)).toBe(-1);
  });

  test('example #6', () => {
    expect(recursiveBinarySearch([3, 4, 5, 6], 3)).toBe(0);
  });

  test('example #7', () => {
    expect(recursiveBinarySearch([30, 40, 50, 60, 70], 60)).toBe(3);
  });
});
