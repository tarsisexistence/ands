/**
 * Algorithm: insertion sort
 * Complexity: O(N^2)
 * Links: https://github.com/v8/v8/blob/950d2051a5ff065a5bc1d31f0e5d1bba850d0b3c/src/array.js#L893-L1173
 */
export const sortByInsertion = array => {
  for (let i = 0; i < array.length; i += 1) {
    const value = array[i];
    let j = i - 1;

    for (; j >= 0 && array[j] > value; j -= 1) {
      array[j + 1] = array[j];
    }

    array[j + 1] = value;
  }

  return array;
};
