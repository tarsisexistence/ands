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