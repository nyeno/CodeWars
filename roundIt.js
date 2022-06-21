function roundIt(n){
  //coding here...
  let a = n.toString().split(".")
  console.log(n)
  if(a[0].length < a[1].length){
    return Math.ceil(Number(a.join(".")))
  }
  else if(a[0].length > a[1].length){
    return Math.floor(Number(a.join(".")))
  }
  else{
     return Math.round(Number(a.join(".")))
  }
}
