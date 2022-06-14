function countGrade(scores){
  //coding here...
  let obj = {S:0, A:0, B:0, C:0, D:0, X:0}
  
  obj.S = (scores.filter(x=>x===100)).length
  
  obj.A = (scores.filter(x=>x<100 && x>=90)).length
  
  obj.B = (scores.filter(x=>x<90 && x>=80)).length
  
  obj.C = (scores.filter(x=>x<80 && x>=60)).length
  
  obj.D = (scores.filter(x=>x<60 && x>=0)).length
  
  obj.X = (scores.filter(x=>x===-1)).length
  

  return obj
  
}
