impl Solution {
    pub fn min_time_to_type(word: String) -> i32 {
        let mut min_time = 0;
        let mut prev = 'a';

        for c in word.chars() {
            let default_min_time = i32::abs(c as i32 - prev as i32);

            if default_min_time > 13 {
                min_time += 26 - default_min_time;
            } else {
                min_time += default_min_time;
            }

            min_time += 1;
            prev = c;
        }

        min_time
    }
}