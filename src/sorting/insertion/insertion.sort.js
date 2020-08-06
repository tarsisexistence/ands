/**
 * Algorithm: insertion sort
 * Complexity: O(N^2)
 * Links: https://github.com/v8/v8/blob/950d2051a5ff065a5bc1d31f0e5d1bba850d0b3c/src/array.js#L893-L1173
 */
export const sortByInsertion = arr => {
  arr = arr.slice();

  for (let i = 0; i < arr.length - 1; i += 1) {
    const key = arr[i + 1];
    let j = i + 1;

    while (j > 0 && key < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j -= 1;
    }

    arr[j] = key;
  }

  return arr;
};

// export const sortByInsertion = array => {
//   array = array.slice();
//
//   for (let i = 0; i < array.length; i += 1) {
//     const value = array[i];
//     let j = i - 1;
//
//     while (j >= 0 && array[j] > value) {
//       array[j + 1] = array[j];
//       j -= 1;
//     }
//
//     array[j + 1] = value;
//   }
//
//   return array;
// };
