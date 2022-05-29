function firstToLast(str,c){
  //coding here..
  
  if(str.lastIndexOf(c) === -1){
    return -1
  } 
  else{
    return str.lastIndexOf(c) - str.indexOf(c)
  }
 
}
