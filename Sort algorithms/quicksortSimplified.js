function quickSort(arr){
if(arr.length===1){
  return arr
}

let pivot= arr[arr.length-1]  
let leftarr=[]
let rightarr=[]

for(i=0;i<arr.length-1;i++){
  if(arr[i]<pivot){
    leftarr.push(arr[i])
  }
  else{
    rightarr.push(arr[i])
  }
}

//merging
if(leftarr.length>0&& rightarr.length>0){
return [...quickSort(leftarr),pivot,...quickSort(rightarr)]
}
else if(leftarr>0){ 
 return [...quickSort(leftarr),pivot]
}
else{
  return [pivot,...quickSort(rightarr)]
}
}

let a=[9,7,5,4,8,6]
console.log(quickSort(a));