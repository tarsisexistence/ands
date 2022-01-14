impl Solution {
    pub fn count_words(words1: Vec<String>, words2: Vec<String>) -> i32 {
        let mut map = std::collections::HashMap::new();

        words1.iter().for_each(|word| *map.entry(word).or_insert(0) += 2);
        words2.iter().for_each(|word| *map.entry(word).or_insert(0) += 3);

        map.values().filter(|&&v| v == 2+3).count() as i32
    }
}

// impl Solution {
//     pub fn count_words(words1: Vec<String>, words2: Vec<String>) -> i32 {
//         let mut ans = 0;
//         let mut map1 = std::collections::HashMap::new();
//         let mut map2 = map1.clone();
//
//         for word in words1.iter() {
//             *map1.entry(word).or_insert(0) += 1;
//         }
//
//         for word in words2.iter() {
//             *map2.entry(word).or_insert(0) += 1;
//         }
//
//         for (k, v) in map1.iter() {
//             if v > &1 {
//                 continue;
//             }
//
//             match map2.get(k) {
//                 Some(value) => {
//                     if value == &1 {
//                         ans += 1;
//                     }
//                 },
//                 None => ()
//             }
//         }
//
//         ans
//     }
// }