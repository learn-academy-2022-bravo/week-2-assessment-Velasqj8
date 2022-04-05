// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// var cohort = "Bravo 2022"
//  console.log(cohort.split(""))

a) Your answer: The split will seperate the string: "B", "r", "a", etc...
b) Verify and explain: My answer was correct the split caused the string to seperate into indiviual strings 'B', 'r', 'a', 'v',
'o', ' ', '2', '0', '2', '2'.


// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
//  console.log(greeter("LEARN Student"))

a) Your answer: This code is going to fail because it does not have a return statement.
b) Verify and explain: My answer was correct, the lack of a return statement returned an undefined value.


// --------------------3) What will this log?

// var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
//  console.log(multBy2)

a) Your answer: This code will take the multBy2 array and return a new array multipled by 2 [8, 10, 12, 14, 16].
b) Verify and explain: My answer was correct, the code took the var array and returned a new one multipled by 2 [ 8, 10, 12, 14, 16 ].


// --------------------4) What will this log?

// var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

a) Your answer: This code will log only odd numbers [11, 13, 15].
b) Verify and explain: My answer was correct, the code logged only the odd numbers [ 11, 13, 15 ].


// --------------------5) What will this log?

// var myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

a) Your answer: The code will log JavaScript.
b) Verify and explain: My answer was correct, and the code logged JavaScript.


// --------------------STRETCH: What will this log?

// class Learn {
//   constructor(name){
//     this.student = name,
//     this.cohort = "Bravo",
//     this.year = 2022
//   }
// }
// var learnStudent = new Learn("George")
// console.log(learnStudent)

a) Your answer: The code will log name, cohort, and year (George, Bravo, and 2022).
b) Verify and explain: My answer was close but the real answer was: Learn { student: 'George', cohort: 'Bravo', year: 2022 }.
