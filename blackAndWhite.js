function blackAndWhite(arr){
  //coding here...
  let a = ""
  
  if(!Array.isArray(arr)){
      a = "fake" 
   }
  else if(arr.indexOf(5) != -1 && arr.indexOf(13) != -1){
    a = "black"
  }
  else{
    a = "white"
  }
  
  
  let x = `It's a ${a} array`
  
  return x
  
}
