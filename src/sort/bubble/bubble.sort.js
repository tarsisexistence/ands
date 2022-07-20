/**
 * Algorithm: bubble sort
 * Complexity: O(N^2)
 */
export const bubbleSort = array => {
  let hasSwapped = false;

  for (let i = 0; i < array.length; i += 1) {
    hasSwapped = false;

    for (let j = 0; j < array.length - i - 1; j += 1) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        hasSwapped = true;
      }
    }

    if (!hasSwapped) {
      return array;
    }
  }
  return array;
};

/**
 * Algorithm: bubble sort (inverted version)
 * Complexity: O(N^2)
 */
export const bubbleSortInverted = input => {
  const array = [...input];
  let hasSwapped = false;

  for (let i = 0; i < array.length; i += 1) {
    hasSwapped = false;

    for (let j = array.length - 1; j > i; j -= 1) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
        hasSwapped = true;
      }
    }

    if (!hasSwapped) {
      return array;
    }
  }

  return array;
};

// without optimisation
// export function bubble(inputArr) {
//   for (let i = 0; i < inputArr.length; i += 1) {
//     for (let j = 0; j < inputArr.length; j += 1) {
//       if (inputArr[j] > inputArr[j + 1]) {
//         let tmp = inputArr[j];
//         inputArr[j] = inputArr[j + 1];
//         inputArr[j + 1] = tmp;
//       }
//     }
//   }
//
//   return inputArr;
// }
