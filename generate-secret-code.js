let str="shivamyz"
function getencoded(str){
    let encodedstr=""
    for(let chr of str){
        let aasci=chr.charCodeAt()+2
        if(aasci===123 || aasci===124){
            encodedstr+=(aasci===123)?"a":"b"
        }else {
         encodedstr+=String.fromCharCode(aasci)
        }
    }
    console.log(encodedstr)
    return encodedstr
}
let encode= getencoded(str)
console.log(encode)
console.log("y".charCodeAt())