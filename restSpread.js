function shuffleIt(arr,...a){
  //coding here...
  
  for(let i=0; i<a.length; i++){
    [arr[a[i][0]], arr[a[i][1]]] = [arr[a[i][1]], arr[a[i][0]]] 
  }
  return arr
}
