let arr=[23,34,54,34,23,67,45,32,23,67,54,28,19]
let result=arr.filter((num)=> num<40)
let output=result.reduce((a,b)=>a+b,0)
console.log(result)
console.log(output)