let family=[
    {
        name:"rahul",
        age:50
    },
    {
        name:"sonia",
        age:45
    },
    {
        name:"chunnu",
        age:15
    },
    {
        name:"munnu",
        age:10
    }
]
// let result=family.map((obj)=>obj.age).reduce((acc,cur)=>acc+cur,0)
let result=family.reduce((acc,cur)=>acc+cur.age,0)
let averageAge=result/family.length
console.log(result)
console.log(averageAge);