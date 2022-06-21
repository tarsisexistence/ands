import { createList } from '../../other/create-list/create-list';
import { mergeNodes } from './merge-nodes-in-between-zeros';

describe('[Leetcode] mergeNodes', () => {
  test('example #1', () => {
    expect(mergeNodes(createList([0, 3, 1, 0, 4, 5, 2, 0]))).toEqual(createList([4, 11]));
  });

  test('example #2', () => {
    expect(mergeNodes(createList([0, 1, 0, 3, 0, 2, 2, 0]))).toEqual(createList([1, 3, 4]));
  });
});
