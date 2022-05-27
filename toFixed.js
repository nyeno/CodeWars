
function howManySmaller(arr,n){
  //coding here..
  
  var count = 0
  for(var i=0 ; i< arr.length; i++){
    arr[i]  = arr[i].toFixed(2)
    
    if(arr[i] < n){
      count++
}
  }
 return  count
  
}
