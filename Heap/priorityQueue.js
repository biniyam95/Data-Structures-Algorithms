class Node{
  constructor(value,priority){
this.value=value
this.priority=priority
  }
}

class priorityQueue{
  constructor(){
    this.arr=[]
  }

  insertval(val,prio){ 
    // enqueue

    let a=this.arr
    a.push([val,prio])

    let c=a.length-1 
    while(c>0){
      let p = Math.floor((c-1)/2)  //parent index
      if(a[p][1] < a[c][1]){
        let temp=a[p]
        a[p]=a[c]
        a[c]=temp
        c=p

      }
      else break
      
    }
    return a
  }

  deleteRoot(){   
   let a= this.arr
   let temp
   let Rootpop=a[0]
   console.log(Rootpop[1],'Root Maaaxxxx to be popped');
    
   a[0]=a[a.length-1]
   a.pop()
    
    
    
    let p=0

    while(((2*p)+1)<=(a.length-1)) {
      let c1=(2*p)+1  
      let c2=(2*p)+2 
      console.log(c2,"222");

      if(c2<=(a.length-1)){
  if((a[c1][1]>a[c2][1]) ){   
    if(a[c1][1]>a[p][1]){
       temp=a[p]
      a[p]=a[c1]
      a[c1]=temp
      p=c1
    }
    else break
  }

  else if((a[c2][1]>a[c1][1])){
          
    if(a[c2][1]>a[p][1]){
      temp=a[p]
     a[p]=a[c2]
     a[c2]=temp
     p=c1
   }
   else break
 }
}
      else{
        if(a[c1][1]>a[p][1]){
           temp=a[p]
          a[p]=a[c1]
          a[c1]=temp
          p=c1
        }
        else break
      }
  
      }
      return a
    }
    

    
  }


let pq=new priorityQueue()
pq.insertval("glass in foot",3)
pq.insertval("heartAttack",10)
pq.insertval("twistedLeg",8)
pq.insertval("Cramps",6)
pq.insertval("headache",2)
pq.insertval("fever",4)
pq.insertval("chestpain",15)

console.log(pq.insertval("gunshot",20))

console.log(pq.deleteRoot());
console.log(pq.deleteRoot());

console.log(pq.deleteRoot())
console.log(pq.deleteRoot())
console.log(pq.deleteRoot())
console.log(pq.deleteRoot())
console.log(pq.deleteRoot())













