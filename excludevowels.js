// let str="Hii Myself Shivam Chauhan"
// let vowels="aeiou"
// let strWithoutVowels=""
// for(let i of str){
//      if(vowels.includes(i.toLowerCase())){
//         continue
//      }
//      strWithoutVowels+=i
// }
// console.log(strWithoutVowels)

                                // OR

let str="Hii Myself Shivam Chauhan"
let vowels="aeiou"
let strArr=[]
for(let i of str){
    strArr.push(i)
    for(let j of vowels){
        if(i.toLowerCase()===j){
        strArr.pop()
        break
        }
    }
    
}
console.log(strArr.join(" "))
