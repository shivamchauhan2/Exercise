//  Arrange Words In Ascending Order of Length
// Input :- gfg is a comp science learning platform
//outpit ;- a is gfg comp science learning platform

let str="gfg is a comp science learning platform"
function sortTextByWordlength(str){
    let arrOfStr= str.split(" ")
    let output=arrOfStr.sort(function(a,b){return a.length-b.length })
    return output.join(" ")
}
let result= sortTextByWordlength(str)
console.log(result)

