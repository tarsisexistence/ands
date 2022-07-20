/**
 * Leetcode #888
 * Difficulty: Easy
 * https://leetcode.com/problems/fair-candy-swap/
 */
/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
export const fairCandySwap = (aliceSizes, bobSizes) => {
  let sumAlice = 0;
  let sumBob = 0;

  for (const size of aliceSizes) {
    sumAlice += size;
  }

  for (const size of bobSizes) {
    sumBob += size;
  }

  for (const sizeA of aliceSizes) {
    for (const sizeB of bobSizes) {
      const left = sumAlice - sizeA + sizeB;
      const right = sumBob - sizeB + sizeA;

      if (left === right) {
        return [sizeA, sizeB];
      }
    }
  }
};

// export const fairCandySwap = (aliceSizes, bobSizes) => {
//   let sumAlice = 0;
//   let sumBob = 0;
//
//   for (const size of aliceSizes) {
//     sumAlice += size;
//   }
//
//   for (const size of bobSizes) {
//     sumBob += size;
//   }
//
//   const diff = (sumAlice - sumBob) / 2;
//   const set = new Set(aliceSizes);
//
//   for (const size of bobSizes) {
//     if (set.has(diff + size)) {
//       return [diff + size, size];
//     }
//   }
// };
//
