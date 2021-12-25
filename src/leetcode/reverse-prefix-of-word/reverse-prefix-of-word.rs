impl Solution {
    pub fn reverse_prefix(word: String, ch: char) -> String {
        let mut reversed = false;

        word.chars().fold(String::from(""), |mut acc, c| {
            acc += &*c.to_string();

            if !reversed && c == ch {
                reversed = true;
                acc = acc.chars().rev().collect::<String>();
            }

            acc
        })
    }
}