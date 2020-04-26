/**
 * Algorithm: quick sort
 * Complexity: O(N*log(N))
 * Links: https://github.com/v8/v8/blob/950d2051a5ff065a5bc1d31f0e5d1bba850d0b3c/src/array.js#L893-L1173
 */
export function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const index = partition(arr, left, right);

    quickSort(arr, left, index - 1);
    quickSort(arr, index, right);
  }

  return arr;
}

function partition(arr, left, right) {
  const pivot = Math.floor(Math.floor((right + left) / 2));

  while (right >= left) {
    while (arr[left] < arr[pivot]) {
      left += 1;
    }

    while (arr[right] > arr[pivot]) {
      right -= 1;
    }

    if (right >= left) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left += 1;
      right -= 1;
    }
  }

  return left;
}

export const basicQuickSort = array => {
  if (array.length < 2) {
    return array;
  }

  const pivot = array[Math.ceil(array.length / 2)];
  const left = array.filter(v => v < pivot);
  const right = array.filter(v => v > pivot);
  const equals = array.filter(v => v === pivot);

  return [...quickSort(left), ...equals, ...quickSort(right)];
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

  return [
    ...straightforwardQuickSort(left),
    ...equals,
    ...straightforwardQuickSort(right)
  ];
};
