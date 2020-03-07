import { sortByBubble, sortByInvertedBubble } from './bubble.sort';

describe('[SORT] bubble', () => {
  describe('when normal', () => {
    test('should sort array ', () => {
      const unsorted = [1, 3, 5, 4, 2];
      const sorted = [1, 2, 3, 4, 5];
      expect(sortByBubble(unsorted)).toEqual(sorted);
    });

    test('should return already sorted array without changes', () => {
      const sorted = [1, 2, 3, 4, 5];
      expect(sortByBubble(sorted)).toEqual(sorted);
    });

    test('should return sorted array when array is sorted in reverse order', () => {
      const unsorted = [5, 4, 3, 2, 1];
      const sorted = [1, 2, 3, 4, 5];
      expect(sortByBubble(unsorted)).toEqual(sorted);
    });

    test('should return sorted array with repeated values', () => {
      const unsorted = [5, 4, 3, 7, 9, 4];
      const sorted = [3, 4, 4, 5, 7, 9];
      expect(sortByBubble(unsorted)).toEqual(sorted);
    });
  });

  describe('when inverted', () => {
    test('should sort array ', () => {
      const unsorted = [1, 3, 5, 4, 2];
      const sorted = [1, 2, 3, 4, 5];
      expect(sortByInvertedBubble(unsorted)).toEqual(sorted);
    });

    test('should return already sorted array without changes', () => {
      const sorted = [1, 2, 3, 4, 5];
      expect(sortByInvertedBubble(sorted)).toEqual(sorted);
    });

    test('should return sorted array when array is sorted in reverse order', () => {
      const unsorted = [5, 4, 3, 2, 1];
      const sorted = [1, 2, 3, 4, 5];
      expect(sortByInvertedBubble(unsorted)).toEqual(sorted);
    });

    test('should return sorted array with repeated values', () => {
      const unsorted = [5, 4, 3, 7, 9, 4];
      const sorted = [3, 4, 4, 5, 7, 9];
      expect(sortByInvertedBubble(unsorted)).toEqual(sorted);
    });
  });
});
