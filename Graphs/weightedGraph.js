//graph with weight here for example - distance


class graph{
  constructor(){
    this.list={}
  }
   
  createNode(place){
  if(!this.list.place){
    this.list[place]=[]
  }
  else return  
  }
  
  //distance in km is the weight
  addConnection(place1,place2,km){
  this.list[place1].push({node:place2, weight:km })
  this.list[place2].push({node:place1, weight:km })
  }
}

let g= new graph()
g.createNode('norway')
g.createNode('sweden')
g.createNode('finland')
g.createNode('denmark')

g.createNode('iceland') 


g.addConnection('norway','sweden',700) 
g.addConnection('finland','denmark',1600)
g.addConnection('norway','denmark',500) 
g.addConnection('finland','sweden',600) 
g.addConnection('norway','finland',1400)
g.addConnection('denmark','sweden',1000) 

g.addConnection('norway','iceland',1400) 





console.log(g.list)
