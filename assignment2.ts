// I am a student of GIAIC
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];

// Convert non-strings to strings if needed
const stringArray = scrambledArray.map(element => element.toString());

const rearrangedArray = [];

// Find and remove "I"
rearrangedArray.push(stringArray.splice(stringArray.indexOf("I"), 1)[0]);

// Find and remove "am"
rearrangedArray.push(stringArray.splice(stringArray.indexOf("am"), 1)[0]);

// Find and remove "a"
rearrangedArray.push(stringArray.splice(stringArray.indexOf("a"), 1)[0]);

// Find and remove "student"
rearrangedArray.push(stringArray.splice(stringArray.indexOf("student"), 1)[0]);

// Find and remove "of"
rearrangedArray.push(stringArray.splice(stringArray.indexOf("of"), 1)[0]);

// Find and remove "GIAIC"
rearrangedArray.push(stringArray.splice(stringArray.indexOf("GIAIC"), 1)[0]);

const sentence = rearrangedArray.join(" ");
console.log(sentence); 

