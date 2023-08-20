let num= [7,5,8,4]  
function divide(num){
if(num.length==1){
  return num
}
let middle=Math.floor((num.length)/2) 
let left= num.slice(0,middle)
let right= num.slice(middle)

return merge(divide(left),divide(right))
}

function merge(left,right){
 let box=[]
  let i=0 // leftset index
  let j=0 // rightset index
  
  while(i<left.length && j<right.length){
   if(left[i]<right[j]){
  box.push(left[i])
  i++
   }
   else{
    box.push(right[j])
    j++
   }
  }
  return box.concat(left.slice(i)).concat(right.slice(j))

}

console.log(divide(num));