impl Solution {
    pub fn cells_in_range(s: String) -> Vec<String> {
        let mut ans = vec![];
        let s: Vec<char> = s.chars().collect();
        let (r1, r2) = (s[1], s[4]);
        let (c1, c2) = (s[0], s[3]);

        for c in c1..=c2 {
            for r in r1..=r2 {
                ans.push(format!("{}{}", c, r));
            }
        }

        ans
    }
}
