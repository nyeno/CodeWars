function findSimilarity(str,word){
  //coding here...
  var regstr=word[0]                             //first letter
          +word.slice(1,-1).replace(/./g,".")  //middle letters
          +word.slice(-1);                     //last letter
  var reg1=new RegExp("^"+regstr+"$");
  return str.split(" ").filter(s => reg1.test(s)).join(" ")
}
