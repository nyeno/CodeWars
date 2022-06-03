function shuffleIt(arr,...a){
  //coding here...
  
  for(let i=0; i<a.length; i++){
    // use destructuring to switch values without using a temp variable
    [arr[a[i][0]], arr[a[i][1]]] = [arr[a[i][1]], arr[a[i][0]]] 
  }
  return arr
}
