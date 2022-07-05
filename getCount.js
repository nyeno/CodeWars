function getCount(str) {
  let regex = /[^aeiou]/g
  //console.log(s)
  
  return str.replace(regex, "").length;
 } 
