import { convertTemperature } from './convert-the-temperature';

describe('[Leetcode] convertTemperature', () => {
  test('example #1', () => {
    expect(convertTemperature(36.5)).toEqual([309.65, 97.7]);
  });

  test('example #2', () => {
    expect(convertTemperature(122.11)).toEqual([395.26, 251.798]);
  });
});
