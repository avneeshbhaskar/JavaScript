const post = {
    username: "avneeshbhaskar",
    content: "coding",
    likes: 390,
    reposts: 89,
    tags: ["@mohit","@harsh"]
}
console.log(post);
console.log(post.username); // syntax to get values in objects
console.log(post.likes);

// javaScript converts all key and keyword into strings key can be numer but it become string eg:-
// not used mostly
const obj = {
  1: "a",
  2: "b", // key always be string without double quotes 
  true: "c",   // number will converts in string then it will read in object
  null:"d",
  undefined: "e",
};
