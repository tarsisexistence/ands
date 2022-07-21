/**
 * Algorithm: selection sort
 * Complexity: O(N^2)
 */
export const selectionSort = array => {
  for (let i = 0; i < array.length; i += 1) {
    let min = i;

    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    [array[i], array[min]] = [array[min], array[i]];
  }

  return array;
};
