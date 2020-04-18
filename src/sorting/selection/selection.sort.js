/**
 * Algorithm: selection sort
 * Complexity: O(N^2)
 */
export const sortBySelection = array => {
  for (let i = 0; i < array.length; i += 1) {
    let minId = i;

    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[minId]) {
        minId = j;
      }
    }

    [array[i], array[minId]] = [array[minId], array[i]];
  }

  return array;
};
