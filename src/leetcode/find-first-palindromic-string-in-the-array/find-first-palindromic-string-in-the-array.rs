impl Solution {
    pub fn first_palindrome(words: Vec<String>) -> String {
        for word in words {
            let len = word.len() / 2;

            if (word.chars().take(len).eq(word.chars().rev().take(len))) {
                return word;
            }
        }

        "".to_string()
    }
}