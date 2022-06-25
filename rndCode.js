function rndCode(){
  //coding here...
  let a = []
  let b = []
  let c = []
  a.push(String.fromCharCode(65, 66, 67, 68, 69,70,71,72,73,74,75,76,77).split(""))
  b.push(String.fromCharCode(48,49,50,51,52,53,54,55,56,57).split(""))
  c.push(String.fromCharCode(126,33,64,35,36,37,38,94,42).split(""))
  console.log(a,b,c)
  
  return((a[0][~~(a[0].length*Math.random())]) + 
         (a[0][~~(a[0].length*Math.random())]) + 
         (b[0][~~(b[0].length*Math.random())]) + 
         (b[0][~~(b[0].length*Math.random())]) + 
         (b[0][~~(b[0].length*Math.random())]) + 
         (b[0][~~(b[0].length*Math.random())]) + 
         (c[0][~~(c[0].length*Math.random())]) + 
         (c[0][~~(c[0].length*Math.random())]) 
        )  
}
