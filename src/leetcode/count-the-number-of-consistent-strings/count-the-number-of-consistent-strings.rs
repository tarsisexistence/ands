use std::collections::HashSet;

impl Solution {
    pub fn count_consistent_strings(allowed: String, words: Vec<String>) -> i32 {
        let mut count = 0;
        let set = allowed.chars().collect::<HashSet<_>>();
        
        for word in words.iter() {
            let mut isConsistent = true;
            
            for char in word.chars() {
                if !set.contains(&char) {
                    isConsistent = false;
                    break
                }
            }
            
            
            if (isConsistent) {
                count += 1;
            }
        }
        
        count
    }
}

// impl Solution {
//     pub fn count_consistent_strings(allowed: String, words: Vec<String>) -> i32 {
//         let mut consistent = 0;
//         for word in words.iter() {
//             if word.chars().all(|x| allowed.contains(x)) {
//                 consistent += 1;
//             }
//         }
//         consistent
//     }
// }