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

export const heavyQuicksort = array => {
  if (array.length < 2) {
    return array;
  }

  const pivot = array[Math.ceil(array.length / 2)];
  const left = array.filter(v => v < pivot);
  const right = array.filter(v => v > pivot);
  const equals = array.filter(v => v === pivot);

  return [...heavyQuicksort(left), ...equals, ...heavyQuicksort(right)];
};

export const simpleQuicksort = arr => {
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

  return [...simpleQuicksort(left), ...equals, ...simpleQuicksort(right)];
};

export const quicksort = (arr, low = 0, high = arr.length - 1) => {
  const els = high - low + 1;

  if (els < 2) {
    return arr;
  }

  let pivot = high;
  let j = low;
  for (let i = low; i < high; i += 1) {
    if (arr[i] <= arr[pivot]) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j += 1;
    }
  }

  if (arr[pivot] < arr[j]) {
    const temp = arr[pivot];
    arr[pivot] = arr[j];
    arr[j] = temp;
    pivot = j;
  }

  quicksort(arr, low, pivot - 1);
  quicksort(arr, pivot + 1, high);

  return arr;
};
