import { minPartitions } from './partitioning-into-minimum-number-of-deci-binary-numbers';

describe('[Leetcode] minPartitions', () => {
  test('example #1', () => {
    expect(minPartitions('32')).toBe(3);
  });

  test('example #2', () => {
    expect(minPartitions('82734')).toBe(8);
  });

  test('example #3', () => {
    expect(minPartitions('27346209830709182346')).toBe(9);
  });
});
