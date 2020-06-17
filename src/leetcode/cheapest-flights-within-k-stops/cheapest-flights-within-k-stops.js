/**
 * Leetcode #787
 * Difficulty: Medium
 * https://leetcode.com/problems/cheapest-flights-within-k-stops/
 */
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
export const findCheapestPrice = function (n, flights, src, dst, K) {
  const map = {};
  const visited = new Map();

  for (let flight of flights) {
    const [from, to, price] = flight;

    if (map[from] === undefined) {
      map[from] = {};
    }

    map[from][to] = price;
  }

  const stack = [[0, src, K + 1]];

  while (stack.length) {
    const [cost, city, stops] = stack.pop();
    visited.set(city, stops);

    if (String(city) === String(dst)) {
      return cost;
    } else if (stops > 0 && map[city] !== undefined) {
      Object.keys(map[city]).forEach(nextCity => {
        const nextCost = map[city][nextCity];

        if (!visited.has(nextCity) || visited.get(nextCity) < stops - 1) {
          stack.push([cost + nextCost, nextCity, stops - 1]);
        }
      });

      stack.sort((a, b) => b[0] - a[0]);
    }
  }

  return -1;
};

// doesn't work on #19 test case
// export const findCheapestPrice = (n, flights, src, dst, K) => {
//   const flightHash = {};
//
//   for (let flight of flights) {
//     const [from, to, price] = flight;
//
//     if (flightHash[from] === undefined) {
//       flightHash[from] = {};
//     }
//
//     flightHash[from][to] = price;
//   }
//
//   const cheapest = find(src, K, 0);
//   return cheapest === Infinity ? -1 : cheapest;
//
//   function find(from, remaining, sum, stack = []) {
//     let min = Infinity;
//
//     if (Number(from) === dst) {
//       return sum;
//     } else if (
//       remaining < 0 ||
//       flightHash[from] === undefined ||
//       stack.includes(from)
//     ) {
//       return min;
//     }
//
//     stack.push(String(from));
//
//     Object.keys(flightHash[from]).forEach(nextFrom => {
//       const potentialMin = flightHash[from][nextFrom] + sum;
//
//       if (potentialMin < min) {
//         min = Math.min(
//           min,
//           find(nextFrom, remaining - 1, potentialMin, [...stack])
//         );
//       }
//     });
//
//     return min;
//   }
// };
