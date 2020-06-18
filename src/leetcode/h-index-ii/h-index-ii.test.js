import { hIndex2 } from './h-index-ii';

describe('[Leetcode] hIndex2', () => {
  test('example #1', () => {
    expect(hIndex2([0, 1, 3, 5, 6])).toBe(3);
  });

  test('example #2', () => {
    expect(hIndex2([0, 1, 3, 4, 5, 6])).toBe(3);
  });

  test('example #3', () => {
    expect(hIndex2([0, 1, 3, 4, 5, 6, 7])).toBe(4);
  });

  test('example #4', () => {
    expect(hIndex2([])).toBe(0);
  });

  test('example #5', () => {
    expect(hIndex2([5])).toBe(1);
  });

  test('example #6', () => {
    expect(hIndex2([0, 0, 0, 3, 4])).toBe(2);
  });

  test('example #7', () => {
    expect(hIndex2([0, 0, 0, 2, 4])).toBe(2);
  });

  test('example #8', () => {
    expect(hIndex2([0, 0, 0, 1, 4])).toBe(1);
  });

  test('example #9', () => {
    expect(hIndex2([5, 5, 5, 5, 5])).toBe(5);
  });

  test('example #10', () => {
    expect(hIndex2([2, 2, 2, 2, 2])).toBe(2);
  });

  test('example #11', () => {
    expect(hIndex2([0, 5, 5, 5, 5])).toBe(4);
  });

  test('example #12', () => {
    expect(hIndex2([0, 5])).toBe(1);
  });

  test('example #13', () => {
    expect(hIndex2([0])).toBe(0);
  });

  test('example #14', () => {
    expect(hIndex2([0, 0])).toBe(0);
  });

  test('example #15', () => {
    expect(hIndex2([2, 2, 2])).toBe(2);
  });
});
