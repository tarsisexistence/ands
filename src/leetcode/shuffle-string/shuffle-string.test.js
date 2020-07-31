import { restoreString } from './shuffle-string';

describe('[Leetcode] restoreString', () => {
  test('example #1', () => {
    expect(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3])).toBe('leetcode');
  });

  test('example #2', () => {
    expect(restoreString('abc', [0, 1, 2])).toBe('abc');
  });

  test('example #3', () => {
    expect(restoreString('aiohn', [3, 1, 4, 2, 0])).toBe('nihao');
  });

  test('example #4', () => {
    expect(restoreString('aaiougrt', [4, 0, 2, 6, 7, 3, 1, 5])).toBe('arigatou');
  });

  test('example #5', () => {
    expect(restoreString('art', [1, 0, 2])).toBe('rat');
  });
});
