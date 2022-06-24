function thinkingAndTesting(number,base){
  //coding here...
  
  let power = Math.floor(Math.log(number)/Math.log(base))
  
  return (number - Math.pow(base, power))
  
