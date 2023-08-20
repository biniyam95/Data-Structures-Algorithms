// queue
class Queue{
  constructor(){
      this.front = null;
      this.rear = null;
  }
  enqueue(data){
      const newNOde = {data , next:null}
      if(this.front == null){
          this.front = newNOde;
      }else{
          this.rear.next = newNOde
      }
      this.rear = newNOde
  }
  dequeue(){
      if(this.front == null){
          return "Empty"
      }
      else{
          this.front = this.front.next
      }
  }

  display(){
      if(this.front == null){
          console.log("poyit pinne vaa");
          return
      }
      let temp = this.front
      while(temp != null){
          console.log(temp.data);
          temp = temp.next;
      }
  }
}

const Nqueue = new Queue();
Nqueue.enqueue(10)
Nqueue.enqueue(20)
Nqueue.enqueue(30)
Nqueue.enqueue(40)
Nqueue.enqueue(50)
Nqueue.dequeue();
Nqueue.display()