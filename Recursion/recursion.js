//normal summing using for loop
function sum(num){
let sum =0
for(i=num;i>0;i--){
  sum=sum+i;
}
return sum
}
console.log(sum(5)) //5+4+3+2+1


//sum of numbers counted backwards
function Sum(num){
  
if(num>0){
return num+Sum(num-1) 
}
else{
  return 0
}

}
console.log(Sum(10))