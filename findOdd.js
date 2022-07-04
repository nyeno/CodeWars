function findOdd(A) {
  //happy coding!
  const obj = {};

  for (const key of A) {
      obj[key] = 0;
   }
   for (const key of A) {
      obj[key] = obj[key] + 1;
  }
   //console.log(obj)
  for (const key in obj) {

    if(obj[key] % 2 !== 0){
      return Number(key)
    }
  } 
 

}
