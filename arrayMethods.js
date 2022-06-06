function infiniteLoop(arr,d,n){
  //coding here...
  let arrLen = []
  let finalArr = []
  let flatArray = [].concat(...arr);
  for(let i = 0; i<arr.length; i++){
    arrLen.push(arr[i].length)
  }
  
  while(n>0){
    if(d === "left"){
      let shifty = flatArray.shift()
      flatArray.push(shifty)
      n--
    }
    if(d === "right"){
      let shifty = flatArray.pop()
      flatArray.unshift(shifty)
      n--
    }
  }
  for(let i = 0; i<arrLen.length; i++){
    let temp = []
    while(arrLen[i]>0){
     temp.push(flatArray.shift()) 
     arrLen[i]-- 
    }
    finalArr.push(temp) 
  }
 
  return finalArr
}
