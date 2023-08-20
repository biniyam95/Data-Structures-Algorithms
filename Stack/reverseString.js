//reverse a string 
function reverse(str){
  let  arr = [];
 let  reversed ="";
   for(i=0;i<str.length;i++){
       arr.push(str[i])
   }
   while(arr.length>0){
    reversed = reversed + arr.pop();
    console.log(reversed)
   }
   return reversed;
}

console.log(reverse("samual"));

//push and pop
let a=[7,48,5,45]
console.log(a.pop())
console.log(a)
console.log(a.push(99))
console.log(a)

///

function reverser(string){
let arr=[]
let rev=""
for (let i = 0; i < string.length; i++) {
arr.push(string[i]) 
}
console.log(arr,"999") 
while(arr.length>0){
  rev=rev+(arr.pop())
  console.log(arr)
}
return  rev
}

console.log(reverser('blue'));
