class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  addNode(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return;
    } else {
      let trav = this.root; 

      while (trav) {
        if (val === trav.value) return;
        //val less means go left
        if (val < trav.value) {
          if (trav.left) {
            trav = trav.left; 
          } else {
            trav.left = newNode;
            return;
          }
        } else {
          //val greater means go right
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


  //Bfs style printing
  Bfs() {
    let nextTraversal = []; 
    let traversed = []; 
    if (this.root) {
      let trav = this.root;

      nextTraversal.push(trav); 
      while (nextTraversal.length) {
        trav = nextTraversal.shift()
        traversed.push(trav.value)
        if (trav.left) nextTraversal.push(trav.left)
        if (trav.right) nextTraversal.push(trav.right)
      }

      return traversed;
    }
  }
}

let tree = new binarySearchTree();

tree.addNode(10);
tree.addNode(7);
tree.addNode(5);
tree.addNode(13);
tree.addNode(4);

//console.log(JSON.stringify(tree));

console.log(tree.Bfs(),"3344");
