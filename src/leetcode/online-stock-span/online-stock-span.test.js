import { StockSpanner } from './online-stock-span';

describe('[Leetcode] StockSpanner', () => {
  test('example #1', () => {
    const result = [];
    const spanner = new StockSpanner();
    result.push(spanner.next(100));
    result.push(spanner.next(80));
    result.push(spanner.next(60));
    result.push(spanner.next(70));
    result.push(spanner.next(60));
    result.push(spanner.next(75));
    result.push(spanner.next(85));
    expect(result).toEqual([1, 1, 1, 2, 1, 4, 6]);
  });
});
