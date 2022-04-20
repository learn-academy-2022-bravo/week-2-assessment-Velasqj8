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

// const num1 = 15
// Expected output: "15 is divisible by three"
// const num2 = 0
// Expected output: "0 is divisible by three"
// const num3 = -7
// Expected output: "-7 is not divisible by three"

describe("divisibleBy3", () => {
  it("takes a number as an argument and decides if the number is evenly divisible by three or not", () => {
    const num1 = 15
    const num2 = 0
    const num3 = -7
    expect(divisibleBy3(num1)).toEqual("15 is divisible by three")
    expect(divisibleBy3(num2)).toEqual("0 is divisible by three")
    expect(divisibleBy3(num3)).toEqual("-7 is not divisible by three")
  })
})

// FAIL  ./code-challenges.test.js
//  divisibleBy3
//    ✕ returns is divisible by three or not (1 ms)
//
//  ● divisibleBy3 › returns is divisible by three or not
//
//    ReferenceError: divisibleBy3 is not defined

// Pseudocode
// create a function named divisibleBy3
// input - datatype Boolean value
// Use a conditional statment to decide if numbers divisible by 3
// Expected output: "is divisble by three", "is not divisible by three", "is not divisible by three"

// b) Create the function that makes the test pass.

const divisibleBy3 = (number) => {
  if (number % 3 === 0){
    return `${number} is divisible by three`
  } else {
    return `${number} is not divisible by three`
  }
}

// PASS  ./code-challenges.test.js
//  divisibleBy3
//    ✓ takes a number as an argument and decides if the number is evenly divisible by three or not (1 ms)

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("capitalized", () => {
  it("returns an array with all the words capitalized", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    expect(capitalized(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]),
    expect(capitalized(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})

// FAIL  ./code-challenges.test.js
//  capitalized
//    ✕ returns an array with all the words capitalized
//
//  ● capitalized › returns an array with all the words capitalized
//
//    ReferenceError: capitalized is not defined

// Pseudocode
// Create a function called capitalized
// input - array datatype
// Use built in method toUpperCase()
// Use map method to iterate each element in array
// Use substring method to extract characters
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// b) Create the function that makes the test pass.

const capitalized = (array) => {
  return array.map(value => value[0].toUpperCase() + value.substring(1))
}
console.log(capitalized(randomNouns1))
console.log(capitalized(randomNouns2))

// PASS  ./code-challenges.test.js
//  capitalized
//    ✓ returns an array with all the words capitalized (1 ms)

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// const vowelTester1 = "learn"
// Expected output: 1
// const vowelTester2 = "academy"
// Expected output: 0
// const vowelTester3 = "challenges"
// Expected output: 2

describe("firstVowel", () => {
  it("takes in a string and logs the index of the first vowel", () => {
    const vowelTester1 = "learn"
    const vowelTester2 = "academy"
    const vowelTester3 = "challenges"
    expect(firstVowel(vowelTester1)).toEqual(1),
    expect(firstVowel(vowelTester2)).toEqual(0)
    expect(firstVowel(vowelTester3)).toEqual(2)
  })
})

// FAIL  ./code-challenges.test.js
//  firstVowel
//    ✕ returns the index of the first vowel. (1 ms)
//
//  ● firstVowel › returns the index of the first vowel.
//
//    ReferenceError: firstVowel is not defined

// Pseudocode
// Create a function called firstVowel
// input - string datatype
// Use for loop to evaluate first vowel
// Use built in method length to determine string length
// Use built in method includes to iterate each character in each string
// Expected output: 1
// Expected output: 0
// Expected output: 2

// b) Create the function that makes the test pass.

const firstVowel = (string) => {
  let vowelFinder = 'aeiouAEIOU'
  for(let i = 0; i < string.length; i++) {
    if (vowelFinder.includes(string[i])) {
      return i;
    }
  }
}
console.log(firstVowel(vowelTester1))
console.log(firstVowel(vowelTester2))
console.log(firstVowel(vowelTester3))

// PASS  ./code-challenges.test.js
//  firstVowel
//    ✓ takes in a string and logs the index of the first vowel (1 ms)
