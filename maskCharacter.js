// function Mask(str,num) {
//     let str2="#".repeat(num)
//     let maskStr= str.slice(0,str.length-num)+str2
//     return maskStr
// }
// let str="12563748959637"
// let mask=Mask(str,3)
// console.log(mask)

//Mask odd and even numbers

function Mask(str,num) {
    let maskStr=""
    if(num==="even" || num==="odd"){
    for(let i in str){
        if(num==="even"){
        maskStr+=(i%2===0)?str[i]:"#"
        }
        else if(num==="odd"){
            maskStr+=(i%2!==0)?str[i]:"#"
        }
    }
}else{
    let mask="#".repeat(num)
    maskStr= str.slice(0,str.length-num) + mask
}
    return maskStr
}
let str="12563748959637"
let maskOdd=Mask(str,"odd")
let maskEven=Mask(str,"even")
let maskFromLast=Mask(str,5)
console.log(maskOdd)
console.log(maskEven)
console.log(maskFromLast);