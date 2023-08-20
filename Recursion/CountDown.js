//print backwards from 5 to 1
function printBackwards(num){
  console.log(num)
  let number= num-1
 
  if(num>1){
    printBackwards(number)
  }
}
printBackwards(5)