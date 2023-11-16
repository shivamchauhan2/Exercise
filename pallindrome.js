let str="Madam"
// let arrOfChar=str.split("")
let reverseStr="";
// let newarr=[]
for(let i=str.length-1;i>=0;i--){
    // newarr.push(arrOfChar[i])
    reverseStr+=str[i]
}
// reverseStr=newarr.join("")
console.log(str)
console.log(reverseStr)
let output=(reverseStr.toLowerCase()===str.toLowerCase())?"The string "+ str +" is pallindrome":`the string ${str} is not pallindrome`
console.log(output)