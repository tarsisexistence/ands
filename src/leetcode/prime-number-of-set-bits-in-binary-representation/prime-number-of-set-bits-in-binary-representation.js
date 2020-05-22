/**
 * Leetcode #762
 * Difficulty: Easy
 * https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/
 */
/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
export const countPrimeSetBits = (L, R) => {
  const primeNumbers = {
    2: true,
    3: true,
    5: true,
    7: true,
    11: true,
    13: true,
    17: true,
    19: true
  };
  let primes = 0;

  for (let i = L; i <= R; i += 1) {
    const str = i.toString(2);
    let bitsCount = 0;

    for (let i = 0; i < str.length; i += 1) {
      if (str[i] === '1') {
        bitsCount += 1;
      }
    }

    if (primeNumbers[bitsCount]) {
      primes += 1;
    }
  }

  return primes;
};

// const countPrimeSetBits = (L, R) => {
//   const primeNumbers = { 2: true, 3: true, 5: true, 7: true, 11: true, 13: true, 17: true, 19: true };
//   let primes = 0;
//
//   for (let i = L; i <= R; i += 1) {
//     const bitsCount = getNumOfSetBits(i);
//
//     if (primeNumbers[bitsCount]) {
//       primes += 1;
//     }
//   }
//
//   return primes;
//
//   function getNumOfSetBits(n) {
//     let result = 0;
//     while (n) {
//       result += (n & 1);
//       n = n >> 1;
//     }
//     return result;
//   }
// };
