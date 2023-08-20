

//2.
let num=[15,10,8,79,8,32,18]
function insertionSort(arr){
  for(i=1;i<arr.length;i++){
    let current= arr[i]
    for(j=i-1; j>=0 && arr[j]>current; j--){
      arr[j+1]=arr[j]
    }
    arr[j+1]=current
  }
  return arr
}

console.log(insertionSort(num));
