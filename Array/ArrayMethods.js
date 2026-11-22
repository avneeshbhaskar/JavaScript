//push //pop //unshift //shift
let cars = ["Audi", "bmw", "xuv", "maruti"];
cars.push("toyota"); // add index in last of array
console.log(cars);
cars.pop(); // delete index from last of array
console.log(cars);
cars.unshift("farari"); // add index in start of array
console.log(cars);
cars.shift(); // delete index from start of array
console.log(cars);

//scneario
let followers = ["a", "b", "c"];
let blocked = followers.shift(); // deletes "a"
console.log(followers);

// practice question we have to add june after july and remove january
let months = ["january", "july", "march", "auagust"];
months.shift();
months.shift();
months.unshift("June");
months.unshift("july");
console.log(months);

// indexOf method
console.log(cars.indexOf("bmw")); // gives index value
console.log(cars.includes("marsadis")); // return true of false

// concat: merge 2 arrays
let primary = ["orange", "mango", "lemon"];
let secondary = ["january", "february", "june"];
let merge = primary.concat(secondary); // it will merge both arrays
console.log(merge); 

// reverse method
console.log(primary.reverse()); // affect on upcomig method like slice

// slice method 
console.log(primary.slice(0,2));
console.log(primary.slice(1));  // give index in reverse 

// splice method
