// function sumEvenOdd(arr){
//      let evenSum=arr.filter((element)=>element%2===0).reduce((acc,cur)=>acc+cur,0)
//      let oddSum=arr.filter((element)=>element%2!==0).reduce((acc,cur)=>acc+cur,0)
//      let obj={even:evenSum,odd:oddSum}
//     //  console.log(obj)
//      return obj
// }
let arr=[1,2,3,4,5,6]
// let output=sumEvenOdd(arr)
console.log(arr)
// console.log(output)
let result= arr.reduce((acc,cur)=>cur%2===0?{...acc,even:acc.even+cur}:{...acc,odd:acc.odd+cur},({even:0,odd:0}))
console.log(result)