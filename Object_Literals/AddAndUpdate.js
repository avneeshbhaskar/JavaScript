const student = {
    name: "Avneesh",
    age:23,
    marks: 94.4,   // we can update here number to string eg :- 94.4 to 'A'
    city: "mumbai"
};
 
// to update 
console.log(student.city = "shahajahanpur");
console.log(student);  // city will update to shahjahanpur

// to add key value pair
console.log(student.gender = "male");
console.log(student);   // gender will also add in object

// to delete  // not use mostly
console.log(delete student.age);  // delete keyword 
console.log(student);
 