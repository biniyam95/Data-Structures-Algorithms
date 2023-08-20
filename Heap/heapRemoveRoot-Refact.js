//Math.max(num1,num2,num3)

let a=[40,15,38,10,14,37,36]

//p-parent index, c-child index
function deleteRoot(){  // max root
  
  a[0]=a[a.length-1]  
  a.pop()
  let p=0
  while(((2*p)+1)<=(a.length-1)){   // 
   let c1=(2*p)+1  //child1 index
   let c2=(2*p)+2  //child2 index

   let greatest=Math.max(a[c1],a[c2],a[p])  //the greatest out of 3

//case 1: if c2 within bounds 
if(c2<=(a.length-1)){
  
  
   if(a[c1]===greatest)   [a[p],a[c1]]=[a[c1],a[p]]
     
   else if(a[c2]===greatest)  [a[p],a[c2]]=[a[c2],a[p]] 
      
   else break 

    }
//case 2: if c2 outside bounds
    else{   
      if(a[c1]===greatest) [a[p],a[c1]]=[a[c1],a[p]]
      
      else break
     
    }

    p=c1 
 
} 
return a  
 
}

console.log(a)
console.log(deleteRoot())
console.log(deleteRoot())
console.log(deleteRoot())
console.log(deleteRoot())
console.log(deleteRoot())
console.log(deleteRoot())
console.log(deleteRoot())






