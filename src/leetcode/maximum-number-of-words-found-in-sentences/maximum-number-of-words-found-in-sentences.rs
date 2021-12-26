impl Solution {
    pub fn most_words_found(sentences: Vec<String>) -> i32 {
        sentences.iter().fold(0, |mut acc,sentence| {
            let len = sentence.split_whitespace().collect::<Vec<&str>>().len() as i32;

            if acc < len {
                len
            } else {
                acc
            }
        })
    }
}