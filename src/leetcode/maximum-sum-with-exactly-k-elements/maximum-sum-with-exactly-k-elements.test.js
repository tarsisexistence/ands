import { maximizeSum } from './maximum-sum-with-exactly-k-elements';

describe('[Leetcode] maximizeSum', () => {
  test('example #1', () => {
    expect(maximizeSum([1, 2, 3, 4, 5], 3)).toBe(18);
  });

  test('example #2', () => {
    expect(maximizeSum([5, 5, 5], 2)).toBe(11);
  });
});
