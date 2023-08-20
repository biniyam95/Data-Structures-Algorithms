class maxBinaryHeap{
  constructor(){
    this.arr=[]
  }

  insertVal(val){
    let a=this.arr
   a.push(val)

   let c= a.length-1 
   let cValue=a[c]

  while(c>0){ 
    let p= Math.floor((c-1)/2)
    let pValue=a[p]
    
    if(cValue<=pValue) break;
      
    
    
      a[p]=cValue
      a[c]=pValue
      
    
  }
  
return a
  }
}

let heap= new maxBinaryHeap()
heap.arr.push(40)
heap.arr.push(15)
heap.arr.push(16)
heap.arr.push(10)
heap.arr.push(14)
heap.arr.push(9)
heap.arr.push(12)
console.log(heap.arr)
console.log(heap.insertVal(18))


