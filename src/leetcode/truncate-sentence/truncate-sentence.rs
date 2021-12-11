impl Solution {
    pub fn truncate_sentence(s: String, k: i32) -> String {
        s.split_whitespace().take(k as usize).collect::<Vec<&str>>().join(" ")
    }
}

// impl Solution {
//     pub fn truncate_sentence(s: String, k: i32) -> String {
//         s.split_whitespace().collect::<Vec<&str>>()[..k as usize].join(" ")
//     }
// }
//
// impl Solution {
//     pub fn truncate_sentence(s: String, k: i32) -> String {
//         (&s).splitn((k + 1) as usize, " ")
//             .take(k as usize)
//             .collect::<Vec<&str>>()
//             .join(" ")
//     }
// }