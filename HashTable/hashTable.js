class HashTable{
  constructor(arrLen){
    this.tableArr=new Array(arrLen) 
  }

  hash(str){
    let total=0
    //let prime=17
    for(let i=0; i<str.length;i++){
      let val= str[i].charCodeAt(0)-96
      total=(total*17+val)% this.tableArr.length  
    }
    return  total  
  }

  set(key,value){
  let index= this.hash(key)
  if(!this.tableArr[index]){
    this.tableArr[index]=[]
  }
  this.tableArr[index].push([key,value]) 
  return "the new key "+ key +" is stored in the index "+index
  }

  get(key){
     let index= this.hash(key)
     if(this.tableArr[index]){
     for(let i=0;i<this.tableArr[index].length;i++){
      if(this.tableArr[index][i][0]===key){
          return this.tableArr[index][i][1]  
      }
     }
    }
  }

  values(){
  let valueArr=[]
  for(let i=0;i<this.tableArr.length;i++){
    if(this.tableArr[i]){ 
    for(let j=0; j<this.tableArr[i].length;j++){
       if(!valueArr.includes(this.tableArr[i][j][1])){
      valueArr.push(this.tableArr[i][j][1])
    }
    }
  }
  }
  return valueArr
  }
  

  value(){
    let valueArr=[]
    if(this.tableArr){
      console.log(this.tableArr,"df")
      console.log(this.tableArr.length,"00909")
    }
    for(let i=0; i<this.tableArr.length;i++){
      if(this.tableArr[i]){ 
       console.log(this.tableArr[i],"999");
    }
    }

    return valueArr
  }
  
  print(){
    for(let i=0;i<this.tableArr.length;i++){
      if(this.tableArr[i]){
        console.log(i,':',this.tableArr[i])
      }
    }
     
    
  }


  remove(key){
    let index=this.hash(key)

    if(this.tableArr[index]){
      console.log(this.tableArr[index],"555")
      console.log(this.tableArr[index].length,"77");
      for (let i = 0; i < this.tableArr[index].length; i++) {  
        if(this.tableArr[index][i][0]==key){
          console.log(this.tableArr[index][i][0],'44');
          this.tableArr[index].splice(i,1)
        }
      }
    }
    
  }

  
}

let ht1 =new HashTable(10) 

console.log(ht1.set("blue","#0000FF"));

console.log(ht1.set("green","#008000"));
console.log(ht1.set("coral","#FF7F50"));


console.log(ht1.set("red","#FF0000"));

console.log(ht1.set("white","FFFFFF"));

console.log(ht1.set("black","#000000"));
console.log(ht1.set("purple","#800080"));

console.log(ht1.get('red'));
console.log(ht1.get('coral'));
console.log(ht1.get('black'));

console.log(ht1.print());
console.log(ht1.remove('blue'));
console.log(ht1.print());
console.log(ht1.remove('black'));
console.log(ht1.print());







