import { countLargestGroup } from './count-largest-group';

describe('[Leetcode] countLargestGroup', () => {
  test('example #1', () => {
    expect(countLargestGroup(13)).toBe(4);
  });

  test('example #2', () => {
    expect(countLargestGroup(2)).toBe(2);
  });

  test('example #3', () => {
    expect(countLargestGroup(15)).toBe(6);
  });

  test('example #4', () => {
    expect(countLargestGroup(24)).toBe(5);
  });
});
