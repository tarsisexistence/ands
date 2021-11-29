struct OrderedStream {
    stream: Vec<Option<String>>,
    size: i32,
    point: i32,
}


/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl OrderedStream {

    fn new(n: i32) -> OrderedStream {
        OrderedStream {
            stream: vec![None; n as usize],
            size: n,
            point: 0,
        }
    }

    fn insert(&mut self, id_key: i32, value: String) -> Vec<String> {
        let id = id_key - 1;
        self.stream[id as usize].replace(value);

        let mut inserted: Vec<String> = Vec::new();

        while let Some(Some(v)) = self.stream.get(self.point as usize) {
            self.point += 1;
            inserted.push(v.clone());
        }

        inserted
    }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * let obj = OrderedStream::new(n);
 * let ret_1: Vec<String> = obj.insert(idKey, value);
 */