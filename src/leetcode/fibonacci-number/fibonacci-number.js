/**
 * Leetcode #509
 * Difficulty: Easy
 * https://leetcode.com/problems/fibonacci-number/
 */
/**
 * @param {number} N
 * @return {number}
 */
export const fib = N => {
  if (N < 2) {
    return N;
  }

  let a = 0;
  let b = 1;

  for (let i = 2; i <= N; i += 1) {
    [b, a] = [a + b, b];
  }

  return b;
};

// const fib = N => N < 2 ? N : fib(N - 1) + fib(N - 2);
