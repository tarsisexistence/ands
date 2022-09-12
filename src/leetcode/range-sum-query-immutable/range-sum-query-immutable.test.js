import { NumArray } from './range-sum-query-immutable';

describe('[Leetcode] NumArray.sumRange', () => {
  test('example #1', () => {
    const instance = new NumArray([-2, 0, 3, -5, 2, -1]);
    const res = [];
    res.push(instance.sumRange(0, 2));
    res.push(instance.sumRange(2, 5));
    res.push(instance.sumRange(0, 5));
    expect(res).toEqual([1, -1, -3]);
  });
});
