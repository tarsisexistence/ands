impl Solution {
    pub fn are_numbers_ascending(s: String) -> bool {
        let mut prev = -1;

        for num in s.split_whitespace().filter_map(|s| s.parse::<i32>().ok()) {
            if prev >= num {
                return false;
            }

            prev = num;
        }

        true
    }
}