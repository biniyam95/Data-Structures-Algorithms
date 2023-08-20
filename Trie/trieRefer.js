class TrieNode {
  constructor() {
    this.children = new Map();
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.endOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!node.children.has(char)) {

        return false;
      }
      node = node.children.get(char);
     console.log(node)
    }
    return node.endOfWord;
  }

  startsWith(prefix) {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
      let char = prefix[i];
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return true;
  }
}


let trie = new Trie();

trie.insert("apple");
trie.insert("app");
trie.insert("happen");


console.log(trie.search("apple")); // true
console.log(trie.search("app")); // true
console.log(trie.search("pen")); // false

console.log(trie.startsWith("appl")); // true
console.log(trie.startsWith("ap")); // true
console.log(trie.startsWith("appe")); // false

console.log(JSON.stringify(trie));
