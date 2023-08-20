let graphList={
  'a': [ 'b', 'c' ],
   'b': [ 'a', 'd' ],
  'c': [ 'a', 'e' ],
  'd': [ 'b', 'f', 'e' ],
  'e': [ 'f', 'c', 'd' ],
  'f': [ 'e', 'd' ]
}




function depthStylePrint(graphList,startNode){
   let stack=[]  //
   let visited={}
   let result=[]
   stack.push(startNode)
   visited[startNode]=true

   while(stack.length){
    let node=stack.pop()
    result.push(node)
    for(let neighbors of graphList[node]){
      if(!visited[neighbors]){
        visited[neighbors]=true
        stack.push(neighbors)
      }
    }
   }
   return result
}

console.log(depthStylePrint(graphList,'a'));
