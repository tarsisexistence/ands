impl Solution {
    pub fn check_if_pangram(sentence: String) -> bool {
        sentence.chars().collect::<std::collections::HashSet<_>>().len() == 26
    }
}