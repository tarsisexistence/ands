/**
 * Algorithm: quick sort
 * Complexity: O(N*log(N))
 * Reference: https://github.com/v8/v8/blob/950d2051a5ff065a5bc1d31f0e5d1bba850d0b3c/src/array.js#L893-L1173
 */
export function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const index = partition(arr, left, right);

    quickSort(arr, left, index - 1);
    quickSort(arr, index + 1, right);
  }

  return arr;
}

function partition(arr, l, r) {
  let p = l - 1;
  const pivot = arr[r];

  while (l < r) {
    if (arr[l] < pivot) {
      p += 1;

      [arr[p], arr[l]] = [arr[l], arr[p]];
    }

    l += 1;
  }

  [arr[r], arr[p + 1]] = [arr[p + 1], arr[r]];

  return p + 1;
}

export const basicQuickSort = array => {
  if (array.length < 2) {
    return array;
  }

  const pivot = array[Math.ceil(array.length / 2)];
  const left = array.filter(v => v < pivot);
  const right = array.filter(v => v > pivot);
  const equals = array.filter(v => v === pivot);

  return [...basicQuickSort(left), ...equals, ...basicQuickSort(right)];
};

export const straightforwardQuickSort = arr => {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];

  const left = [];
  const equals = [];
  const right = [];

  for (let value of arr) {
    if (value < pivot) {
      left.push(value);
    } else if (value > pivot) {
      right.push(value);
    } else {
      equals.push(value);
    }
  }

  return [...straightforwardQuickSort(left), ...equals, ...straightforwardQuickSort(right)];
};

// without random
export function quickSortWithoutRandom(input) {
  return dnq(input);

  function dnq(array) {
    if (array.length < 2) {
      return array;
    }

    if (array.length === 2) {
      if (array[0] > array[1]) {
        [array[0], array[1]] = [array[1], array[0]];
      }

      return array;
    }

    const supporting = array[array.length - 1];
    const left = [];
    const right = [];

    for (let i = 1; i < array.length; i += 1) {
      const num = array[i];

      if (num < supporting) {
        left.push(num);
      } else {
        right.push(num);
      }
    }

    return [...dnq(left), supporting, ...dnq(right)];
  }
}
