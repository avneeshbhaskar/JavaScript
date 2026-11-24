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

// slice method  // it returns the copy of the array original array remains same
console.log(primary.slice(0, 2));
console.log(primary.slice(1)); // give index in reverse

// splice method  // it changes the original array and returns the changes array
// splice = removes/replaces/add elements in place //you can add or remove index in the original array
// splice(start,deleteCount,item0...itemN)  //deleteCount is optional
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colors.splice(3, 1, "grey"));
console.log(colors);
console.log(colors.splice(0, 0, "purple"));
console.log(colors);

//sort method
let days = ["monday", "tuesday", "wednesday", "thursday", "friday", "sunday"];
let daysCount = [72, 54, 69, 41, 32, 18, 21];  
console.log(days.sort());
console.log(daysCount.sort());
// sort method for numbers in array converted to string thats why it is no applicable on numbers
// this method is only applicable on strings

