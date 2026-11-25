// const classInfo = {
//     aman: {},       // how to make nested object next step below:-
//     avneesh: {},    
//     harsh: {}
// }
const classInfo = {
    Mohit: {
        grade:"A+",
        city:"mumbai"
    },
    avneesh: {
        grade:"A",
        city:"bareilly"
    },
    harsh: {
        grade:"O",
        city:"Pune"
    }
}
console.log(classInfo);  
console.log(classInfo.avneesh.city)  // chaining 
classInfo.avneesh.city = "Shahjahanpur";  // update
console.log(classInfo.avneesh.city)
