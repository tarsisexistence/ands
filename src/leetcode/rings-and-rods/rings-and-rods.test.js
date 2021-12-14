import { countPoints } from './rings-and-rods';

describe('[Leetcode] countPoints', () => {
  test('example #1', () => {
    expect(countPoints('B0B6G0R6R0R6G9')).toBe(1);
  });

  test('example #2', () => {
    expect(countPoints('B0R0G0R9R0B0G0')).toBe(1);
  });

  test('example #3', () => {
    expect(countPoints('G4')).toBe(0);
  });

  test('example #4', () => {
    expect(countPoints('B9R9G0R4G6R8R2R9G9')).toBe(1);
  });
});
