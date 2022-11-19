/**
 * Leetcode #1790
 * Difficulty: Easy
 * https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/description/
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
export const areAlmostEqual = (s1, s2) => {
  const a1 = s1.split('');
  const a2 = s2.split('');
  let index = -1;

  for (let i = 0; i < a1.length; i += 1) {
    if (a1[i] === a2[i]) {
      continue;
    }

    if (index === -1) {
      index = i;
      continue;
    }

    const temp = a2[index];
    a2[index] = a2[i];
    a2[i] = temp;
    break;
  }

  return a1.join('') === a2.join('');
};

// const areAlmostEqual = (s1, s2) => {
//     const map1 = new Map();
//     const map2 = new Map();
//     let diff = 0;

//     for (let i = 0; i < s1.length; i += 1) {
//         const c1 = s1[i];
//         const c2 = s2[i];

//         map1.set(c1, (map1.get(c1) ?? 0) + 1);
//         map2.set(c2, (map2.get(c2) ?? 0) + 1);

//         if (c1 !== c2) {
//             diff += 1;
//         }
//     }

//     for (const [c1, v1] of map1) {
//         const v2 = map2.get(c1);

//         if (v1 !== v2) {
//             return false;
//         }
//     }

//     return (diff === 0 || diff === 2);
// };
