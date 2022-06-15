impl Solution {
    pub fn digit_count(num: String) -> bool {
        let mut map = std::collections::HashMap::new();

        for c in num.chars() {
            let digit: usize = c.to_digit(10).unwrap_or(0) as usize;
            *map.entry(digit).or_insert(0) += 1;
        }


        for (i, c) in num.chars().enumerate() {
            let count = c.to_digit(10).unwrap_or(0) as usize;
            let contains = map.contains_key(&i);

            if (contains && map[&i] != count) || (!contains && count != 0) {
                return false
            }
        }

        true
    }
}