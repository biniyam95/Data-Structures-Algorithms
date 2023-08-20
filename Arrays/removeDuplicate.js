let a=[7,4,6,8,6,5,4,6,6,1,1,6]
let s1=new Set(a)
console.log(Array.from(s1))


var a2=[1,2,3,2,4,4,3,5,6,4,5];

function removeDuplicates(arr){
    obj={};
    var newArray=[];

    //traversing 
    for(var i=0;i<arr.length;i++){
        if(!obj[arr[i]]){ 
            obj[arr[i]]=true;
            newArray.push(arr[i])
        }
    }

    return newArray;
}

console.log(removeDuplicates(a2))