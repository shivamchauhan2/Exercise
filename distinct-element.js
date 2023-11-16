let obj={}
let arr=["a","b","c","c","d","e","b","f","a"]

const result= arr.reduce((acc,cur)=>cur in acc?{...acc,[cur]:acc[cur]+1}:{...acc,[cur]:1},{})
console.log(result)

// for(let char of arr){
//     if(char in obj){
//         obj[char]+=1
//     }
//     else{
//         obj[char]=1
//     }
// }
// console.log(obj)
// console.log(obj["a"])