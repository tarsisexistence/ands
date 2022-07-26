import { maxLengthBetweenEqualCharacters } from './largest-substring-between-two-equal-characters';

describe('[Leetcode] maxLengthBetweenEqualCharacters', () => {
  test('example #1', () => {
    expect(maxLengthBetweenEqualCharacters('aa')).toBe(0);
  });

  test('example #2', () => {
    expect(maxLengthBetweenEqualCharacters('abca')).toBe(2);
  });

  test('example #3', () => {
    expect(maxLengthBetweenEqualCharacters('cbzxy')).toBe(-1);
  });

  test('example #4', () => {
    expect(maxLengthBetweenEqualCharacters('scayofdzca')).toBe(6);
  });

  test('example #5', () => {
    expect(maxLengthBetweenEqualCharacters('mabcdbxnad')).toBe(6);
  });
});
