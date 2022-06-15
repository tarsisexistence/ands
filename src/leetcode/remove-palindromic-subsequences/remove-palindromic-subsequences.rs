impl Solution {
    pub fn remove_palindrome_sub(s: String) -> i32 {
        if s == s.chars().rev().collect::<String>() {
            1
        } else {
            2
        }
    }
}