/**
 * Leetcode #461
 * https://leetcode.com/problems/hamming-distance/
 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
export const hammingDistance = (x, y) => {
  let binX = x.toString(2);
  let binY = y.toString(2);
  let differences = 0;

  if (binX.length > binY.length) {
    binY = Array(binX.length - binY.length).fill('0').join('') + binY;
  } else {
    binX = Array(binY.length - binX.length).fill('0').join('') + binX;
  }

  for (let i = 0; i < binX.length; i += 1) {
    if (binX[i] !== binY[i]) {
      differences += 1;
    }
  }

  return differences;
};
