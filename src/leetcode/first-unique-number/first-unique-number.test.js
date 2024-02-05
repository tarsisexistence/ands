import { FirstUnique } from './first-unique-number';
import { getQueueChecker } from '../../utils/queue';

const queueChecker = getQueueChecker(FirstUnique, 'FirstUnique');

describe('[Leetcode] FirstUnique', () => {
  test('example #1', () => {
    expect(
      queueChecker(
        [
          'FirstUnique',
          'showFirstUnique',
          'add',
          'showFirstUnique',
          'add',
          'showFirstUnique',
          'add',
          'showFirstUnique'
        ],
        [[[2, 3, 5]], [], [5], [], [2], [], [3], []]
      )
    ).toEqual([null, 2, null, 2, null, 3, null, -1]);
  });

  test('example #2', () => {
    expect(
      queueChecker(
        ['FirstUnique', 'showFirstUnique', 'add', 'add', 'add', 'add', 'add', 'showFirstUnique'],
        [[[7, 7, 7, 7, 7, 7]], [], [7], [3], [3], [7], [17], []]
      )
    ).toEqual([null, -1, null, null, null, null, null, 17]);
  });

  test('example #3', () => {
    expect(
      queueChecker(['FirstUnique', 'showFirstUnique', 'add', 'showFirstUnique'], [[[809]], [], [809], []])
    ).toEqual([null, 809, null, -1]);
  });
});
