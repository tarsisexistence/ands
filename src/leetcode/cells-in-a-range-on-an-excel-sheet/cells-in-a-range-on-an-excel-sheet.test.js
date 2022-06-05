import { cellsInRange } from './cells-in-a-range-on-an-excel-sheet';

describe('[Leetcode] cellsInRange', () => {
  test('example #1', () => {
    expect(cellsInRange('K1:L2')).toEqual(['K1', 'K2', 'L1', 'L2']);
  });

  test('example #2', () => {
    expect(cellsInRange('K3:L4')).toEqual(['K3', 'K4', 'L3', 'L4']);
  });

  test('example #3', () => {
    expect(cellsInRange('A1:F1')).toEqual(['A1', 'B1', 'C1', 'D1', 'E1', 'F1']);
  });
});
