let employee=[
    {
        name:"shivam",
        exp:5
    },
    {
        name:"Siddhant",
        exp:1
    },
    {
        name:"Tarun",
        exp:3
    },
    {
        name:"Rahul",
        exp:4
    }
]
let output=employee.filter((emp)=> emp.exp>3).map(emp=>emp.name)
console.log(output)