import { isPowerOfTwo } from './power-of-two';

describe('[Leetcode] isPowerOfTwo', () => {
  test('example #1', () => {
    expect(isPowerOfTwo(1)).toBeTruthy();
  });

  test('example #2', () => {
    expect(isPowerOfTwo(16)).toBeTruthy();
  });

  test('example #3', () => {
    expect(isPowerOfTwo(218)).toBeFalsy();
  });

  test('example #4', () => {
    expect(isPowerOfTwo(0)).toBeFalsy();
  });

  test('example #5', () => {
    expect(isPowerOfTwo(-1)).toBeFalsy();
  });
});
