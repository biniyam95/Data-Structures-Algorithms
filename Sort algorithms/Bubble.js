

//1.bubblesort

let num=[7,5,8,4,3]


function bubbleSort(arr){
  for ( i = 0; i < arr.length-1; i++) {
    for ( j = 0; j < arr.length-i-1; j++) {
      if(arr[j+1]<arr[j]){
        let temp =arr[j]
        arr[j]=arr[j+1]
        arr[j+1]=temp
      }      
    }
    
  }
}

console.log(bubbleSort(num))
