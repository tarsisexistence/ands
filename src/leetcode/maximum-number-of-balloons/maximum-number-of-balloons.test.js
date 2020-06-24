import { maxNumberOfBalloons } from './maximum-number-of-balloons';

describe('[Leetcode] maxNumberOfBalloons', () => {
  test('example #1', () => {
    expect(maxNumberOfBalloons('nlaebolko')).toBe(1);
  });

  test('example #2', () => {
    expect(maxNumberOfBalloons('loonbalxballpoon')).toBe(2);
  });

  test('example #3', () => {
    expect(maxNumberOfBalloons('loonbalxballpoo')).toBe(1);
  });

  test('example #4', () => {
    expect(maxNumberOfBalloons('balon')).toBe(0);
  });
});
