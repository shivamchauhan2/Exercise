// Reverse words of a string without changing their order

let str= "hii my self SHivam Chauhan"

let reverseWords=(str)=>{
    let arrOfStr=str.split(" ")
    let reveseWordsstr=""
    for( let element of arrOfStr){
        for(let i=element.length-1;i>=0;i--){
            reveseWordsstr+=element[i]
        }
        reveseWordsstr+=" "
    }
    return reveseWordsstr
}
 let result=reverseWords(str)
console.log(result)