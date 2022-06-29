function findSimilarity(str,word){
  //coding here...
  var regstr=word[0]                             
          +word.slice(1,-1).replace(/./g,".")  
          +word.slice(-1);                    
  var reg1=new RegExp("^"+regstr+"$");
  return str.split(" ").filter(s => reg1.test(s)).join(" ")
}
