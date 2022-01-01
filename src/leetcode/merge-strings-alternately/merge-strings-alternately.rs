impl Solution {
    pub fn merge_alternately(word1: String, word2: String) -> String {
        let mut ans: String = String::from("");
        let mut idx = 0;
        let len1 = word1.len();
        let len2 = word2.len();

        while idx < len1 || idx < len2 {
            if idx < len1 {
                ans.push(word1.chars().nth(idx).unwrap());
            }

            if idx < len2 {
                ans.push(word2.chars().nth(idx).unwrap());
            }

            idx += 1;
        }

        ans
    }
}

// impl Solution {
//     pub fn merge_alternately(word1: String, word2: String) -> String {
//         let mut ans: String = String::from("");
//         let len = usize::max(word1.len(), word2.len());
//         let word1 = word1.chars();
//         let word2 = word2.chars();
//
//         for idx in 0..len {
//             if let Some(value1) = word1.clone().nth(idx) {
//                 ans.push_str(&*value1.to_string());
//             }
//
//             if let Some(value2) = word2.clone().nth(idx) {
//                 ans.push_str(&*value2.to_string());
//             }
//         }
//
//         ans
//     }
// }