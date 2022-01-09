impl Solution {
    pub fn is_sum_equal(first_word: String, second_word: String, target_word: String) -> bool {
        Self::str_sum(first_word) + Self::str_sum(second_word) == Self::str_sum(target_word)
    }

    fn str_sum(word: String) -> u8 {
        let mut num: u8 = 0;

        for c in word.chars() {
            let c_num = c as u8 - 'a' as u8;
            num = num * 10 + c_num;
        }

        num
    }
}