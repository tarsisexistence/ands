import { addBinary } from './add-binary';

describe('[Leetcode] addBinary', () => {
  test('example #1', () => {
    expect(addBinary('11', '1')).toBe('100');
  });

  test('example #2', () => {
    expect(addBinary('1010', '1011')).toBe('10101');
  });
});
