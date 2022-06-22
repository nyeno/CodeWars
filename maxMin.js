function maxMin(arr1,arr2){
  //coding here...
  let results = arr1.map((x, i) => Math.abs(x - arr2[i]) )
  return [Math.max(...results), Math.min(...results)]
  
}
