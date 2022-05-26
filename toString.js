function colorOf(r,g,b){
  //coding here
  var color = []
  color.push(r.toString(16))
  color.push(g.toString(16))
  color.push(b.toString(16))
  
  for(var i=0; i< color.length; i++){
    if(color[i].length< 2){
      color[i] = "0" + color[i]
    }
  }
  
  return "#" + color.join('')
  
}
