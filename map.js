function isolateIt(arr){
  //coding here...
  let b = arr.map(x => {
    let a = x.split('')
    //check for even letter words
    if(a.length%2 ===0){
      a.splice(a.length/2, 0, "|")
    }
    else{
      //check for odd letter words
      a[a.length/2 - 0.5] = "|"
  }
     return a.join('')
  })
 
  return b
  
}
