function hash(key,arrLen){
  let total=0
  for (let i = 0; i < key.length; i++) {
    let oneChar=key[i]   
    let value= oneChar.charCodeAt(0)-96
    total=(total+value) % arrLen  
    
  }
  return total
}

console.log(hash("pink",10))







