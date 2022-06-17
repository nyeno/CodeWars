function mirrorImage(arr){
  //coding here...
  let a= ""
  let b = ""
  let c = ""
  let output = []
    
  let d = arr.some((x,i) => {
      //use if statement to prevent undefined values 
    if(i + 1 < arr.length){
      a = arr[i].toString()
      b = arr[i+1].toString().split('').reverse().join('')
      c = arr[i+1].toString()
     
    }  
  
    return a == b
  })
  if(d){
     output.push(Number(a), Number(c))
  }
 else{
   output.push(-1, -1)
 }
 return output

}
