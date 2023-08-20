// if and else- ternary is not possible becuase return cannot be used in ternary.if both statements need return, we can return the whole result
// else was common in both left and right case. so we had to refactor that
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
  find(val) {
    if (this.root) {
      let trav = this.root; 
      while (trav) {
        if (val === trav.value) return "value exists";

        if (val < trav.value) {
          trav = trav.left;
        } else if (val > trav.value) {
          trav = trav.right;
        }
      }
      if (!trav) {
        return "doesnt exist";
      }
    }
  }
}

let tree = new binarySearchTree();

tree.addNode(10);
tree.addNode(7);
tree.addNode(5);
tree.addNode(13);
tree.addNode(4);

console.log(JSON.stringify(tree));

console.log(tree.find(5));
console.log(tree.find(11));
