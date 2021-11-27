impl Solution {
    pub fn sort_sentence(s: String) -> String {
        let mut words: Vec<&str> = s.split_whitespace().collect::<Vec<&str>>();

        words.sort_by(|a, b| a.chars().last().unwrap().cmp(&(b.chars().last().unwrap())));

        let new_words: Vec<String> = words
            .iter()
            .map(|x| String::from(x.split_at(x.len() - 1).0))
            .collect();

        new_words.join(" ")
    }
}

// String::from(words.iter().fold(String::default(), |x, y| x + y).chars().map(|x| if x.is_digit(10) { ' ' } else { x }).collect::<String>().trim_end())

// impl Solution {
//     pub fn sort_sentence(s: String) -> String {
//         let mut s = s.split(" ").collect::<Vec<_>>();
//         s.sort_unstable_by_key(|a| a.as_bytes()[a.len() - 1] - b'0');
//         s.iter()
//             .map(|w| unsafe { String::from_utf8_unchecked(w[..w.len() - 1].into()) })
//             .collect::<Vec<_>>()
//             .join(" ")
//     }
// }