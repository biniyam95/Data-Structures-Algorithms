//largest and smallest
let a=[7,4,8,6,5]

function largSmall(arr){
  let largestSmallest=new Array()  
  let largest=arr[0]
  let smallest=arr[0]
 for(let i=1;i<arr.length;i++){
  if(arr[i]<smallest){
    smallest=arr[i]
  }
  if(arr[i]>largest){
    largest=arr[i]
  }
  largestSmallest[0]=smallest
  largestSmallest[1]=largest
  return largestSmallest

 } 
}

console.log(largSmall(a))