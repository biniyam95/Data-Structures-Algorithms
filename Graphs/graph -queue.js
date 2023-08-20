class graph {
  constructor() {
    this.list = {};
  }

  createNode(node) {
    if (!this.list[node]) this.list[node] = [];
  }

  addConnection(node1, node2) {
    this.list[node1].push(node2);
    this.list[node2].push(node1);
  }

  depthStylePrint(startNode) {
    let queue = []  
    let result=[]
    let visited = {}

    queue.push(startNode);
    visited[startNode] = true;
    while (queue.length) {
      console.log(queue,"***");
      let node = queue.shift();
      result.push(node)

      for (let item of this.list[node]){
        if (!visited[item]) {
          visited[item] = true;
          queue.push(item)
        }
      }

    }
    return result
  }
}

let g = new graph();
g.createNode("a");
g.createNode("b");
g.createNode("c");
g.createNode("d");
g.createNode("e");
g.createNode("f");

g.addConnection("a", "b");
g.addConnection("a", "c");
g.addConnection("b", "d");
g.addConnection("e", "f");
g.addConnection("d", "f");
g.addConnection("e", "c");
g.addConnection("e", "d");

console.log(g.list);

console.log(g.depthStylePrint('a'));
