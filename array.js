//starter code

/**function getLength(arr){
  //return length of arr
  return ?
}
function getFirst(arr){
  //return the first element of arr
  return ?
}
function getLast(arr){
  //return the last element of arr
  return ?
}
function pushElement(arr){
  var el=1;
  //push el to arr
  
  return arr
}
function popElement(arr){
  //pop an element from arr
  
  return ?
}**/

//my solution

function getLength(arr){
  //return length of arr
  return arr.length
}
function getFirst(arr){
  //return the first element of arr
  return arr[0]
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length - 1]
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el)
  
  return arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop()
  return arr
}
