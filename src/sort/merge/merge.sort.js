/**
 * Algorithm: merge sort
 * Complexity: O(N*log(N))
 */
export const mergeSort = array => {
  if (array.length < 2) {
    return array;
  }

  const delimiter = Math.floor(array.length / 2);
  const left = array.slice(0, delimiter);
  const right = array.slice(delimiter);

  return merge(mergeSort(left), mergeSort(right));
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

// export const mergeSortAlternative = array => {
//   if (array.length < 2) {
//     return array;
//   }
//
//   const middle = array.length / 2;
//   const left = array.slice(0, middle);
//   const right = array.slice(middle);
//
//   return merge(mergeSortNew(left), mergeSortNew(right));
//
//   function merge(left, right) {
//     const sorted = [];
//     let l = 0;
//     let r = 0;
//
//     while (left[l] !== undefined && right[r] !== undefined) {
//       if (left[l] < right[r]) {
//         sorted.push(left[l]);
//         l += 1;
//       } else {
//         sorted.push(right[r]);
//         r += 1;
//       }
//     }
//
//     if (left[l] === undefined && right[r] !== undefined) {
//       sorted.push(...right.slice(r));
//     } else if (right[r] === undefined && left[l] !== undefined) {
//       sorted.push(...left.slice(l));
//     }
//
//     return sorted;
//   }
// };
