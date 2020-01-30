/**
 * Leetcode #977
 * Difficulty: Easy
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
export const sortedSquares = A => {
  const result = [];
  let startPointer = 0;
  let endPointer = A.length - 1;

  while (endPointer >= startPointer) {
    const startSquare = A[startPointer] ** 2;
    const endSquare = A[endPointer] ** 2;

    if (startSquare > endSquare) {
      result.push(startSquare);
      startPointer += 1;
    } else {
      result.push(endSquare);
      endPointer -= 1;
    }
  }

  return result.reverse();
}
