function persistence(num) {
   //code me
  let counter = 0
  let number = num.toString()
  while(number.length > 1){
    number = number.split('').map(x => Number(x)).reduce(
      (previousValue, currentValue) => previousValue * currentValue, 1).toString();
    counter++
  }
  return(counter)
}
