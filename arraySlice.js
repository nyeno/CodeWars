function threeInOne(arr){
  //coding here...
  var output = []
  //use slice to create a duplicate array
  var newArr = arr.slice()
  while(newArr.length!=0){
    let cut = newArr.splice(0,3)
    let added = cut.reduce((a,b) => a + b)
    output.push(added)
  }
  return output
}
