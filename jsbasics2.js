arr2=[2,3,4]
function getinfo(a,b,...c){
    console.log(a,b,c)
}
console.log(getinfo(1,2,3,4,4,5,5))


//map , filter , find ,some , every , includes , indexof , findindex


const personArryay=[
    {
        name:"vaibhav",
        age:30,
        country:"America"

    },
     {
        name:"king",
        age:30,
        country:"America"

    },
     {
        name:"meow",
        age:30,
        country:"America"

    }
]


let getallnames= personArryay.map((singleperson, index)=>{
    return `${singleperson.name} age is ${singleperson.age}`

})

console.log(getallnames)



let personfromusa = personArryay.find((singleperson,idx)=>{
    return singleperson
    .country==="America"
})
console.log(personfromusa)


let personfromusa2 = personArryay.filter((singleperson,idx)=>{
    return singleperson
    .country==="America"
})
console.log(personfromusa2)



let checksomearrayexample=personArryay.some((simgleperson)=>{
    return simgleperson.age>30

})

console.log(checksomearrayexample)


let checkeveryexample=personArryay.every((p)=>{
    return p.age<100
})
console.log(checkeveryexample)


let getindex=personArryay.findIndex((sg)=>{
    return sg.country==="America"
})

console.log(getindex)