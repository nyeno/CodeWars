function cutCube(volume,n){
  //coding here...
  let cube = volume/n
  if(Math.cbrt(volume)%1 != 0){
    return false 
  }
  else{
     return Math.cbrt(cube)%1 == 0
  }
 
  
}
