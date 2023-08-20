


let num=[7,5,8,4,6,3]

function divide(arr){
 if(arr.length ===1){
  return arr
 }
//split array in into right and left
let length = arr.length
let middle = Math.floor(length/2)
let left = arr.slice(0,middle)  // left section starting from o index to middle index
let right = arr.slice(middle)// starting from middle till the end
 return merge(divide(left),divide(right))  
}

function merge(left,right){
//
let box = []
let i = 0 //leftIndex
let j = 0 //rightIndex

while(i < left.length && j < right.length){  
  if( left[i] < right[j]){
    box.push( left[i] )
    i++;
  }
  else{
  box.push(right[j])
  j++
  }
}

//merging
return box.concat(left.slice(i)).concat(right.slice(j))
}

console.log(divide(num),"99")



//-----testing-----
let number=[6,4,5,8,3]
console.log(number.slice(4));
console.log(number.slice(3)) 
console.log(number.slice(0,3)) 
console.log(number.slice(1,3)) 

//concat
let Box=[8]
let box1=[5]
let box2=[9]

console.log(Box.concat(box1))
console.log(Box.concat(box1).concat(box2))

