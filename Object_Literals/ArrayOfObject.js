const classInfo = [
    {
        name: "Harsh", 
        grade: "A+++",
        city: "katra"
    },
    {
        name: "Avneesh",
        grade: "A++",
        city: "Shahajahanpur"
    },
    {
        name: "Mohit",
        grade: "A+",
        city: "bilaspur"
    },
];
console.log(classInfo);
console.log(classInfo[1].name);
classInfo[1].grade = "O+++";
console.log(classInfo);
classInfo[1].gender = "male";  // to add something
console.log(classInfo);