/**
 * Leetcode #2103
 * Difficulty: Easy
 * https://leetcode.com/problems/rings-and-rods/
 */
/**
 * @param {string} rings
 * @return {number}
 */
export const countPoints = rings => {
  const array = new Array(10).fill('');
  let count = 0;

  for (let i = 0; i < rings.length; i += 2) {
    array[rings[i + 1]] += rings[i];
  }

  for (let i = 0; i < array.length; i += 1) {
    const value = array[i];

    if (value.includes('R') && value.includes('G') && value.includes('B')) {
      count += 1;
    }
  }

  return count;
};

// Not my solution
// var countPoints = function (rings) {
//   // take a binary number, which has different bits representing different
//   // colors
//   let bit = {
//     R: 0,
//     G: 1,
//     B: 2
//   };
//
//   // create an array for all rods
//   // initialize it with 0 -> 000
//   // here each bit represents R, G, B from the right
//   let rods = new Array(10).fill(0);
//
//   // iterate through the given string
//   for (let i = 0; i < rings.length; i += 2) {
//     // i represents the color, and i + 1 represents the location
//     let color = bit[rings[i]];
//
//     // left shift 1 as many times as the bit position of color
//     let bitmask = 1 << color;
//
//     // bitwise OR bitmask with the value at the current rod
//     // `+` at the beginning of +rings[i + 1] converts string into a number
//     rods[+rings[i + 1]] |= bitmask;
//   }
//
//   // we want to count the number of rods with all three colors
//   // binary representation of such rods will be (111) base 2 = (7) base 10
//
//   return rods.reduce((a, b) => (b === 7 ? a + 1 : a), 0);
// };
