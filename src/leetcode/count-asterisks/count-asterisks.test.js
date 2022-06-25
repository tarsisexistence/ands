import { countAsterisks } from './count-asterisks';

describe('[Leetcode] countAsterisks', () => {
  test('example #1', () => {
    expect(countAsterisks('l|*e*et|c**o|*de|')).toBe(2);
  });

  test('example #2', () => {
    expect(countAsterisks('iamprogrammer')).toBe(0);
  });

  test('example #3', () => {
    expect(countAsterisks('yo|uar|e**|b|e***au|tifu|l')).toBe(5);
  });
});
