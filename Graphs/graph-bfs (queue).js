//use queue for bfs and stack for dfs

let graphList={
  'a': [ 'b', 'c' ],
  'b': [ 'a', 'd' ],
  'c': [ 'a', 'e' ],
  'd': [ 'b', 'f', 'e' ],
  'e': [ 'f', 'c', 'd' ],
  'f': [ 'e', 'd' ]
}

 function BreadthStlePrint(graph,start){
   let queue=[] 
   let visited={}
   let result=[]

   queue=[start]
   visited[start]=true

   
   let right=stack.pop()
   


} 