// Define the graph as an adjacency list
const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E']
};

// Recursive implementation of DFS
function dfs(node, visited) {
  visited[node] = true;
  console.log(node);

  const neighbors = graph[node];
  for (let i = 0; i < neighbors.length; i++) {
    const neighbor = neighbors[i];
    if (!visited[neighbor]) {
      dfs(neighbor, visited);
    }
  }
}

// Run DFS starting from node 'A'
const startingNode = 'A';
const visited = {};
dfs(startingNode, visited);
