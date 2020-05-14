/**
 * Leetcode #208
 * Difficulty: Medium
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 */
export class Trie {
  root = {};

  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert = word => {
    let node = this.root;

    for (let i = 0; i < word.length; i += 1) {
      const char = word[i];

      if (node[char] === undefined) {
        node[char] = {
          isEnd: false
        };
      }

      node = node[char];
    }

    node.isEnd = true;
  };

  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search = word => {
    const result = this.traverse(word);
    return result !== null && result.isEnd;
  };

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith = prefix => this.traverse(prefix) !== null;

  traverse = word => {
    let node = this.root;

    for (let i = 0; i < word.length; i += 1) {
      const char = word[i];

      if (node[char] === undefined) {
        return null;
      }

      node = node[char];
    }

    return node;
  };
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
