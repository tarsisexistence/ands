/**
 * Merge sort algorithm
 * Complexity: O(N*log(N))
 */
export const sortByMerge = array => {
  if (array.length < 2) {
    return array;
  }

  const delimiter = Math.floor(array.length / 2);
  const left = array.slice(0, delimiter);
  const right = array.slice(delimiter);

  return merge(sortByMerge(left), sortByMerge(right));
};

function merge(left, right) {
  const sorted = [];
  let leftId = 0;
  let rightId = 0;

  while (leftId < left.length && rightId < right.length) {
    if (left[leftId] < right[rightId]) {
      sorted.push(left[leftId]);
      leftId += 1;
    } else {
      sorted.push(right[rightId]);
      rightId += 1;
    }
  }

  return sorted.concat(left.slice(leftId), right.slice(rightId));
}
