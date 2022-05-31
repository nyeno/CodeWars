function alienLanguage(str){
  //coding here...
  var upperCase = str.toUpperCase()
  var words = upperCase.split(" ")
  var arr = words.map(x => x.slice(0,-1) + x[x.length-1].toLowerCase() )
  
  return arr.join(" ")
}
