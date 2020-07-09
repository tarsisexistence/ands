import { canMakeArithmeticProgression } from './can-make-arithmetic-progression-from-sequence';

describe('[Leetcode] canMakeArithmeticProgression', () => {
  test('example #1', () => {
    expect(canMakeArithmeticProgression([3, 5, 1])).toBeTruthy();
  });

  test('example #2', () => {
    expect(canMakeArithmeticProgression([1, 2, 4])).toBeFalsy();
  });
});
