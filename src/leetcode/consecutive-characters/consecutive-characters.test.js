import { maxPower } from './consecutive-characters';

describe('[Leetcode] maxPower', () => {
  test('example #1', () => {
    expect(maxPower('leetcode')).toBe(2);
  });

  test('example #2', () => {
    expect(maxPower('abbcccddddeeeeedcba')).toBe(5);
  });

  test('example #3', () => {
    expect(maxPower('triplepillooooow')).toBe(5);
  });

  test('example #4', () => {
    expect(maxPower('hooraaaaaaaaaaay')).toBe(11);
  });

  test('example #5', () => {
    expect(maxPower('tourist')).toBe(1);
  });
});
