impl Solution {
    pub fn interpret(command: String) -> String {
        return str::replace(&str::replace(&command, "()", "o"), "(al)", "al")
    }
}

// impl Solution {
//     pub fn interpret(command: String) -> String {
//         let mut ans = String::new();
//         let mut prev = ' ';
//
//         for c in command.chars() {
//             match (c, prev) {
//                 ('G', _) => ans.push(c),
//                 (')', '(') => ans.push('o'),
//                 ('a', '(') => ans.push_str("al"),
//                 _ => prev = c,
//             }
//         }
//
//         ans
//     }
// }