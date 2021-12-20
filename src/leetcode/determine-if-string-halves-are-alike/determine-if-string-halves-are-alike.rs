impl Solution {
    pub fn halves_are_alike(s: String) -> bool {
        let vowels: std::collections::HashSet<char> = ['a', 'e', 'i', 'o', 'u'].iter().cloned().collect();
        let mut balance = 0;
        let len = s.len();

        for (idx, char) in s.to_lowercase().chars().enumerate() {
            if !vowels.contains(&char) {
                continue;
            }

            if (idx < len / 2) {
                balance += 1;
            }  else {
                balance -= 1;
            }

        }

        balance == 0
    }
}