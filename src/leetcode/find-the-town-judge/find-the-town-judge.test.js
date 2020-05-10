import { findJudge } from './find-the-town-judge';

describe('[Leetcode] findJudge', () => {
  test('example #1', () => {
    expect(findJudge(2, [[1, 2]])).toBe(2);
  });

  test('example #2', () => {
    expect(
      findJudge(3, [
        [1, 3],
        [2, 3]
      ])
    ).toBe(3);
  });

  test('example #3', () => {
    expect(
      findJudge(3, [
        [1, 3],
        [2, 3],
        [3, 1]
      ])
    ).toBe(-1);
  });

  test('example #4', () => {
    expect(
      findJudge(3, [
        [1, 2],
        [2, 3]
      ])
    ).toBe(-1);
  });

  test('example #4', () => {
    expect(
      findJudge(3, [
        [1, 2],
        [1, 3],
        [2, 3]
      ])
    ).toBe(3);
  });

  test('example #6', () => {
    expect(
      findJudge(4, [
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [4, 3]
      ])
    ).toBe(3);
  });
});
