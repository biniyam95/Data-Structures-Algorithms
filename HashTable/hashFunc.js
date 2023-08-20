class HashTable{
  constructor(size){
    this.data= new Array(size)
  }

  _hash(key){
    let hash =0 
    for (let i = 0; i < key.length; i++) {
       hash =( hash + key.charCodeAt(i)*i)% this.data.length
    } 
    return hash
  }

  //set - to add a key value
  set(key,value){
    let address = this._hash(key)
    if(!this.data[address]){
      this.data[address]=[]
    }
      this.data[address].push([key,value])
      return this.data
  }

  get(key){
    let address = this._hash(key)
    let currBucket=this.data[address]
    if(currBucket){
      for (let i = 0; i < currBucket.length; i++) {
            if(currBucket[i][0] === key ){ 
            return currBucket[i][1]  
            }
      }
    }
    return undefined
  }

  keys(){
    let keysArray =[]
    for(let i=0; i< this.data.length; i++){
      if(this.data[i]){
        keysArray.push(this.data[i][0][0])
      }
    }
    return keysArray
  }
}

const ht1 = new HashTable(10)
ht1.set('grapes',10000)
ht1.set('apples',475)
console.log(ht1.get('grapes'))
console.log(ht1.get('apples'))
console.log(ht1.keys());

