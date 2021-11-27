import { countMatches } from './count-items-matching-a-rule';

describe('[Leetcode] countMatches', () => {
  test('example #1', () => {
    expect(
      countMatches(
        [
          ['phone', 'blue', 'pixel'],
          ['computer', 'silver', 'lenovo'],
          ['phone', 'gold', 'iphone']
        ],
        'color',
        'silver'
      )
    ).toBe(1);
  });

  test('example #2', () => {
    expect(
      countMatches(
        [
          ['phone', 'blue', 'pixel'],
          ['computer', 'silver', 'phone'],
          ['phone', 'gold', 'iphone']
        ],
        'type',
        'phone'
      )
    ).toBe(2);
  });
});
