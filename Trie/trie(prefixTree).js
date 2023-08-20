class Node{
  constructor(value){
 this.value=this.value
 this.isWord=false // word exists or not
 this.children=[]
  }
}

class Trie{
  constructor(){
    this.root=new Node('')//node of value null is set to root
  }

  Insert(word){
    let node= this.root

    for (let i = 0; i < word.length; i++) {
      let letter = word[i];

      if(!node.children.letter){
        return false
        
      }

      node=node.children
      
    }
  }
}