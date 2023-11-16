//  Count frequency of all characters in an array
// return the character of the max frequency
// if two or more character have the same max frequency then written the highest number

let arr=[1,2,3,4,6,2,3,3,1,4,5,6,7,4,2,5,2,2,2]
let numberWithHighestfrequency=(arr)=>{
     let obj= arr.reduce((acc,cur)=> cur in acc?{...acc,[cur]:acc[cur]+1}:{...acc,[cur]:1},{})
     let frequencyobj= Object.values(obj).sort()
     let highestFrequencyinArray=frequencyobj[frequencyobj.length-1]
     let arrOfkeys= Object.keys(obj)
     let arrOfValues=Object.values(obj)
     let output={}
     let highfrequencyArr=[]
     for ( let i in arrOfValues){
        if(arrOfValues[i]===highestFrequencyinArray){
            highfrequencyArr.push(arrOfkeys[i]) 
        }   
     }
     output=highfrequencyArr[highfrequencyArr.length-1]
     return output
}
let result=numberWithHighestfrequency(arr)
console.log(result)