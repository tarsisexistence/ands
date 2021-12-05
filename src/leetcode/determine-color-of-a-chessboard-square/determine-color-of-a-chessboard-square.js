/**
 * Leetcode #1812
 * Difficulty: Easy
 * https://leetcode.com/problems/determine-color-of-a-chessboard-square/
 */
/**
 * @param {string} coordinates
 * @return {boolean}
 */
export const squareIsWhite = coordinates => {
  const isEvenLetter = coordinates[0].charCodeAt() % 2 === 0;
  const isEvenNum = coordinates[1] % 2 === 0;

  // return isEvenLetter ? !isEvenNum : isEvenNum;
  return (isEvenLetter && !isEvenNum) || (!isEvenLetter && isEvenNum);
};
