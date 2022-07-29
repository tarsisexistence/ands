export function findDuplicates(arr1, arr2) {
  const set = new Set(arr1);
  const res = [];

  for (const num of arr2) {
    if (set.has(num)) {
      res.push(num);
    }
  }

  return res;
}

// function findDuplicates(arr1, arr2) {
//     const res = [];
//     let i = 0;
//     let j = 0;
//
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             i += 1;
//         } else if (arr1[i] > arr2[j]) {
//             j += 1;
//         } else {
//             res.push(arr1[i]);
//             i += 1;
//             j += 1;
//         }
//     }
//
//     return res;
// }
