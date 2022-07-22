/**
 * Leetcode #242
 * Difficulty: Easy
 * https://leetcode.com/problems/valid-anagram/
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// export const isAnagram = (s, t) => {
//   if (s.length !== t.length) {
//     return false;
//   }
//
//   const mapS = new Map();
//   const mapT = new Map();
//
//   for (let i = 0; i < s.length; i += 1) {
//     mapS.set(s[i], (mapS.get(s[i]) ?? 0) + 1);
//     mapT.set(t[i], (mapT.get(t[i]) ?? 0) + 1);
//   }
//
//   if (mapS.size !== mapT.size) {
//     return false;
//   }
//
//   for (const [keyS, countS] of mapS) {
//     if (countS !== mapT.get(keyS)) {
//       return false;
//     }
//   }
//
//   return true;
// };

export const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const map = new Map();

  for (let i = 0; i < t.length; i += 1) {
    map.set(t[i], (map.get(t[i]) ?? 0) + 1);
  }

  for (let i = 0; i < s.length; i += 1) {
    const value = map.get(s[i]);

    if (value) {
      map.set(s[i], value - 1);
    }
  }

  for (const value of map.values()) {
    if (value > 0) {
      return false;
    }
  }

  return true;
};

// export const isAnagram = (s, t) => {
//   if (s.length !== t.length) {
//     return false;
//   }
//   const map1 = new Map();
//   const map2 = new Map();
//
//   for (let i = 0; i < s.length; i += 1) {
//     map1.set(s[i], (map1.get(s[i]) ?? 0) + 1);
//     map2.set(t[i], (map2.get(t[i]) ?? 0) + 1);
//   }
//
//   if (map1.size !== map2.size) {
//     return false;
//   }
//
//   for (const [key1, value1] of map1) {
//     const value2 = map2.get(key1);
//
//     if (value1 !== value2) {
//       return false;
//     }
//   }
//
//   return true;
// };
