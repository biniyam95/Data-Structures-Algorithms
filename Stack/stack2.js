class Node{
  constructor(value){
    this.value=value
    this.prev=null
    this.next =null
  }
}
class Stack{
  constructor(data){
    this.head= null
    this.tail=null
    this.size=0
  }
// add at the end
  push(value){
    if(!this.head){
      let newNode=new Node(value)
      this.head = newNode
      this.tail= newNode
      this.size++
    }
    else{
      let newNode= new Node(value)
      this.tail.next =newNode
      newNode.prev= this.tail
      this.tail=newNode
      this.size++
    }
  }
//remove at the end
  pop(){
    if(!this.head){
      console.log('stack is empty')
    }
    else{
     
     this.tail= this.tail.prev
      this.tail.next= null
      this.size--
    }
  }

  print(){
    let temp= this.head
    
    while(temp){
      console.log(temp.value)
      temp=temp.next
    } 
    return 
  }
  
}

let st1= new Stack()
st1.push(4)
st1.push(5)
st1.push(8)
st1.print()
st1.pop()
console.log("one popped");
st1.print()
console.log("one pushed");
st1.push(28)
st1.print()