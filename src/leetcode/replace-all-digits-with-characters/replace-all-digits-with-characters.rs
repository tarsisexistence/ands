impl Solution {
    pub fn replace_digits(s: String) -> String {
        let mut chars: Vec<char> = s.chars().collect();

        for idx in 1..s.len() {
            if idx % 2 == 1 {
                let prev: u8 = chars[idx - 1] as u8 - 'a' as u8;
                let shift: u8 = chars[idx] as u8 - '0' as u8;
                let char: char = (prev + shift + 'a' as u8) as char;
                chars[idx] = char;
            }
        }

        chars.iter().collect::<String>()
    }
}