impl Solution {
    pub fn prefix_count(words: Vec<String>, pref: String) -> i32 {
        words
            .into_iter()
            .filter(|word| word.len() >= pref.len() && word[..pref.len()] == pref)
            .collect::<Vec<String>>()
            .len() as i32
    }
}