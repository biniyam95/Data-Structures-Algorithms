
function getDuplicates(arr){
    return arr.filter((currentValue,currentIndex)=> 
    arr.indexOf(currentValue) !== currentIndex  
  )
}
let a= [7,4,6,8,6,5,4,6,6,1,1,6]
let s1=new Set(getDuplicates(a))
console.log(Array.from(s1))


//3.find duplicates

function findDuplicates(arr){
  return Array.from(new Set(arr.filter((item,index)=>
    arr.indexOf(item) !==index
  )))
}

let a3=[7,4,6,8,6,5,4,6,6,1,6]
console.log(findDuplicates(a3))











