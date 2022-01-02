impl Solution {
    pub fn kth_distinct(arr: Vec<String>, k: i32) -> String {
        let mut map = std::collections::HashMap::new();
        let mut distincts: Vec<String> = Vec::new();

        for s in arr.iter() {
            *map.entry(s).or_insert(0) += 1;
        }

        for s in arr.iter() {
            let count = *map.get(s).unwrap();

            if count == 1 {
                distincts.push(s.clone());
            }
        }

        if distincts.len() < k as usize {
            String::from("")
        } else {
            distincts[k as usize - 1].to_owned()
        }

    }
}

// impl Solution {
//     pub fn kth_distinct(arr: Vec<String>, k: i32) -> String {
//         let mut map = std::collections::HashMap::new();
//         let mut distincts: Vec<String> = Vec::new();
//
//         for s in arr.iter() {
//             *map.entry(s).or_insert(0) += 1;
//         }
//
//         for s in arr.iter() {
//             let count = *map.get(s).unwrap();
//
//             if count == 1 {
//                 distincts.push(s.clone());
//             }
//         }
//
//         if distincts.len() < k as usize {
//             String::from("")
//         } else {
//             distincts[k as usize - 1].to_owned()
//         }
//
//     }
// }