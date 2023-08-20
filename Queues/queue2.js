//queue class
class Queue{
  constructor(){
    this.front=null
    this.rear = null
  }

  //add 
  enqueue(data){
let newNode = {data,next:null}
if(this.front ==null){
  this.front =newNode
  this.rear=newNode
}
else{
  this.rear.next =newNode
  this.rear=newNode
}

  }

  //remove
  dequeue(){
if(this.front==null){
  return "empty"
}
else{
  this.front=this.front.next
}
  }

  //display
print(){
  if(this.front ==null){
    console.log('queue is empty')
    return
  }

  // loop
  let temp =this.front
  while(temp!=null){
    console.log(temp.data)
    temp=temp.next
  }
}
}



let q1=new Queue() 
q1.enqueue(52)  
q1.enqueue(42)
q1.enqueue(82)
q1.print()
console.log("kkk")
q1.dequeue() // first will leave first
q1.print()


