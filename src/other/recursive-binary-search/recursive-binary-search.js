export function recursiveBinarySearch(nums, target) {
  return search(nums, 0);

  function search(arr, start) {
    if (arr.length === 1) {
      return arr[0] === target ? start : -1;
    }

    const middle = Math.floor(arr.length / 2);
    const middleValue = arr[middle];

    if (target < arr[middle]) {
      return search(arr.slice(0, middle - 1), start);
    } else if (target > middleValue) {
      return search(arr.slice(middle + 1), start + middle + 1);
    } else {
      return start + middle;
    }
  }
}
