/**
 * Leetcode #275
 * Difficulty: Medium
 * https://leetcode.com/problems/h-index-ii/
 */
/**
 * @param {number[]} citations
 * @return {number}
 */
export const hIndex2 = citations => {
  return citations.length === 0 ? 0 : dnq(0, citations.length - 1);

  function dnq(start, end) {
    if (start >= end) {
      const offset = citations.length - start - 1;
      return citations[start] > offset && citations[start] !== 0 ? offset + 1 : offset;
    }

    const middle = Math.floor((start + end) / 2);

    if (citations[middle] > citations.length - middle - 1) {
      return dnq(start, middle - 1);
    } else {
      return dnq(middle + 1, end);
    }
  }
};
//

// export const hIndex2 = citations => {
//   let index = 0;
//
//   for (let i = citations.length - 1; i >= 0; i -= 1) {
//     const num = citations[i];
//
//     if (num < index + 1) {
//       break;
//     }
//
//     index += 1;
//   }
//
//   return index;
// };
