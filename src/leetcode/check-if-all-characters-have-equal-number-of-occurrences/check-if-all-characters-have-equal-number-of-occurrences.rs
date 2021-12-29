impl Solution {
    pub fn are_occurrences_equal(s: String) -> bool {
        let mut map = std::collections::HashMap::new();

        for c in s.chars() {
            *map.entry(c).or_insert(0) += 1;

        }

        let mut prev: Option<&i32> = None;

        for (_, v) in map.iter() {
            if prev.is_some() && prev.unwrap() != v {
                return false;
            }

            prev = Some(v);
        }

        true
    }
}

// use std::collections::{HashMap, HashSet};
// impl Solution {
//     pub fn are_occurrences_equal(s: String) -> bool {
//         let mut counts: HashMap<char, i32> = HashMap::new();
//         for c in s.chars() {
//             *counts.entry(c).or_insert(0) += 1;
//         }
//
//         counts.into_iter().map(|(_, n)| n).collect::<HashSet<i32>>().len() == 1
//     }
// }
