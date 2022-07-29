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

// export function findDuplicates(arr1, arr2) {
//   const res = [];
//
//   if (arr1.length < arr2.length) {
//     const temp = arr1;
//     arr1 = arr2;
//     arr2 = temp;
//   }
//
//   for (const num of arr2) {
//     const value = bs(arr1, num);
//
//     if (value !== -1) {
//       res.push(num);
//     }
//   }
//
//   return res;
//
//   function binarySearch(arr, num) {
//     let start = 0;
//     let end = arr.length - 1;
//
//     while (start <= end) {
//       const mid = Math.floor((start + end) / 2);
//
//       if (arr[mid] < num) {
//         start = mid + 1;
//       } else if (arr[mid] > num) {
//         end = mid - 1;
//       } else {
//         return mid;
//       }
//     }
//
//     return -1;
//   }
// }
