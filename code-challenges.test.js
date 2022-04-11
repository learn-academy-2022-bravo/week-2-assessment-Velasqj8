// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"

describe("divisbleBy3", () => {
  it("returns is divisble by three or not", () => {
    expect(divisbleBy3(num1)).toEqual("is divisible by three")
    expect(divisbleBy3(num2)).toEqual("is not divisible by three")
    expect(divisbleBy3(num3)).toEqual("is not divisible by three")
  })
})

FAIL  ./code-challenges.test.js
 divisbleBy3
   ✕ returns is divisble by three or not (1 ms)

 ● divisbleBy3 › returns is divisble by three or not

   ReferenceError: divisbleBy3 is not defined

// Pseudocode
// create a function named divisbleBy3
// input - datatype Boolean value
// Use a conditional statment to decide if numbers divisble by 3
// Expected output: "is divisble by three", "is not divisble by three", "is not divisble by three"

// b) Create the function that makes the test pass.

const divisbleBy3 = (number) => {
  if(number / 3) {
    return "is divisble by three"
  } else {
    return "is not divisble by three"
  }
// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("capitalized", () => {
  it("returns an array with all the words capitalized", () => {
    expect(capitalized(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]),
    expect(capitalized(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})

FAIL  ./code-challenges.test.js
 capitalized
   ✕ returns an array with all the words capitalized

 ● capitalized › returns an array with all the words capitalized

   ReferenceError: capitalized is not defined

// Pseudocode
// Create a function called capitalized
// input - array datatype
// use built in method toUpperCase()
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// b) Create the function that makes the test pass.

const capitalized = (array) => {
  let nouns1 = randomNouns1.toUpperCase
  let nouns2 = randomNouns2.toUpperCase
  return array.toUpperCase(nouns1)
  return arraytoUpperCase(nouns2)
}



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("firstVowel", () => {
  it("returns the index of the first vowel.", () => {
    expect(firstVowel(vowelTester1)).toEqual("learn"),
    expect(firstVowel(vowelTester2)).toEqual("academy")
    expect(firstVowel(vowelTester3)).toEqual("challenges")
  })
})

FAIL  ./code-challenges.test.js
 firstVowel
   ✕ returns the index of the first vowel. (1 ms)

 ● firstVowel › returns the index of the first vowel.

   ReferenceError: firstVowel is not defined

// Pseudocode
// Create a function called firstVowel
// input - string datatype
// Use for loop to evaluate first vowel.
// Expected output: 1
// Expected output: 0
// Expected output: 2

// b) Create the function that makes the test pass.

const firstVowel = () => {
  let index = []
  for(let i = 0; i < str.length; i++) {
    if (str[i] === [a,e,i,o,u,A,E,I,O,U]) {
      index.push(i);
    }
  }
}
