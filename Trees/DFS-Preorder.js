//trav= this.root
// if trav=trav.value, trav doesnt posess any node, which means it doesnt get nodes left or right.trav needs to posess node to acess left,right and value of the node

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  addNode(val) {
    let newNode = new Node(val);
    //if root is empty
    if (!this.root) {
      this.root = newNode;
      return;
    } else {
      let trav = this.root; 

      while (trav) {
        if (val === trav.value) return;
        if (val < trav.value) {
          if (trav.left) {
            trav = trav.left; 
          } else {
            trav.left = newNode;
            return;
          }
        } else {
          if (trav.right) {
            trav = trav.right; 
          } else {
            trav.right = newNode; 
            return; 
          }
        }
      }
    }
  }

  //DFS traversing style (preorder)
  DFSPreorder(){
    let trav= this.root
    let traversed=[]
    function traverse(trav){
       traversed.push(trav.value)
       if(trav.left) traverse(trav.left)
       if(trav.right) traverse(trav.right)
    }
    traverse(trav)
    return traversed  
  }
  

}

let tree = new Tree()

tree.addNode(10);
tree.addNode(7);
tree.addNode(5);
tree.addNode(13);
tree.addNode(3);
tree.addNode(8);
tree.addNode(12);
tree.addNode(16);
tree.addNode(6);
tree.addNode(9);
tree.addNode(11);
tree.addNode(14);
tree.addNode(17);

console.log(JSON.stringify(tree));


console.log(tree.DFSPreorder())

