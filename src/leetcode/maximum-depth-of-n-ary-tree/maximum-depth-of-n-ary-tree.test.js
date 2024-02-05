import { Node } from '../../utils/node';
import { maxDepth } from './maximum-depth-of-n-ary-tree';

describe('[Leetcode] maxDepth', () => {
  test('example #1', () => {
    expect(maxDepth(new Node(1, [new Node(3, [new Node(5), new Node(6)]), new Node(2), new Node(4)]))).toBe(3);
  });

  test('example #2', () => {
    expect(
      maxDepth(
        new Node(1, [
          new Node(2),
          new Node(3, [new Node(6), new Node(7, [new Node(11, [new Node(14)])])]),
          new Node(4, [new Node(8, [new Node(12)])]),
          new Node(5, [new Node(9, [new Node(13)]), new Node(10)])
        ])
      )
    ).toBe(5);
  });
});
