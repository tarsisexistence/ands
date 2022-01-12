impl Solution {
    pub fn can_be_typed_words(text: String, broken_letters: String) -> i32 {
        let set = broken_letters.chars().collect::<std::collections::HashSet<_>>();

        text.split_whitespace().filter(|word| word.chars().all(|c| !set.contains(&c))).count() as i32
    }
}

// impl Solution {
//     pub fn can_be_typed_words(text: String, broken_letters: String) -> i32 {
//         let mut ans = 0;
//         let set = broken_letters.chars().collect::<std::collections::HashSet<_>>();
//
//         for word in text.split_whitespace() {
//             let can_be_typed = word.chars().all(|c| !set.contains(&c)); // or !any
//
//             if can_be_typed {
//                 ans += 1;
//             }
//         }
//
//         ans
//     }
// }