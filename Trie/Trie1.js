class Node{
  constructor(value){
    this.value=value
    this.children={}  //key and newNode
    this.End=false  // marks the end of a word
  }
}

class Trie{
  constructor(){
    this.root= new Node('')
  }

  insert(word){
    let trav= this.root
    for (let letter of word) {
      if(!trav.children[letter]){
        trav.children[letter]= new Node(letter)
      }

      trav=trav.children[letter]
    }

    trav.End=true
  }

  search(word){
    let trav=this.root
    for (let letter of word) {
      if(!trav.children[letter]){
        return 'not found'
      }
      else
      trav=trav.children[letter]
    }
    return trav.End  // last letter can be true or false
  }

  startsWith(prefix) {
    let trav = this.root;
    for (let letter of prefix) {
      if (!trav.children[letter]) {
        return false;
      }
      else
      trav = trav.children[letter];
    }
    return true;
  }

}

let trie=new Trie()


trie.insert("cat");
trie.insert("can");
trie.insert("car");
trie.insert("dog");




console.log(trie.search("cat"));
console.log(trie.search("cart"));
console.log(trie.startsWith("ca"),"09");
console.log(trie.startsWith("cla"),"09");



console.log(JSON.stringify(trie));