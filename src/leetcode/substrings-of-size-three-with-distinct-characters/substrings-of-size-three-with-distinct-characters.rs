impl Solution {
    pub fn count_good_substrings(s: String) -> i32 {
        let mut ans = 0;
        let chars = s.chars().collect::<Vec<char>>();
        let len = chars.len();

        if (len < 3) {
            return ans;
        }

        for idx in 0..len - 2 {
            let slice = &chars[idx..idx+3];
            let set = slice.iter().collect::<std::collections::HashSet<_>>();

            if set.len() == 3 {
                ans += 1;
            }
        }

        ans
    }
}