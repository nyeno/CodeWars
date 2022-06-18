function bigToSmall(arr){
  //coding here...
  let result = [].concat(...arr).sort((a,b) => b-a).join(">")
  return result
}
