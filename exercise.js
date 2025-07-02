//MAX NUMBER
/*
function maxNumber (num1,num2){
 // if (num1 > num2)
 //   console.log(num1 + " is the bigger number");
 // else
 //   console.log(num2 + " is the bigger number");
  let maxNum = num1>= num2? num1:num2;
  console.log(maxNum);
}

maxNumber(6,6);*/


//FIZZ BUZZ
/*function FizzBuzz(num){
  if (num % 3 === 0 && num % 5 ===0)
      return 'FizzBuzz';
  else if (num % 3 === 0 )
      return 'Fizz';
  else if (num % 5 ===0)
      return 'Buzz';
  else
       return num;
}

console.log(FizzBuzz(5));*/


//FETCHING OUT ODD AND EVEN NUMBERS FROM AN ARRAY
/*
function evenNumbers(array1){
  for(const element of array1){
    if (element % 2 === 0)
      console.log(element);

  }
}

//what is the void the IDE keeps highlighting for the functions?
function oddNumbers(array2){
  for(const element of array2){
    if (element % 2 !== 0)
      console.log(element);

  }
}

evenNumbers([1,2,3,4,5,6,7,8,9]);
oddNumbers([1,2,3,4,5,6,7,8,9]);*/


//STUDENT SCORE ANALYZER - BY CHATGPT
//functions - calculate average score,find the student with the highest score,lists of student who passed(score >= 50
//expand array object below
/*const STUDENT_MATHS_SCORE = [
  {
    name: 'IOM Future',
    score: 99
  },
  {
    name: 'Helen Mark',
    score: 89
  },
  {
    name: 'Kris Lee',
    score: 93
  },
  {
    name: 'Peace hall',
    score: 88
  },
  {
    name: 'Mary Mark',
    score: 38
  },
  {
    name: 'Kraven Gray',
    score: 63
  },
  {
    name: 'Hope Zeal',
    score: 20
  },
  {
    name: 'Ziglar Zick',
    score: 79
  },
  {
    name: 'Neel Smoke',
    score: 30
  },
  {
    name: 'Haven Hill',
    score: 58
  },
  {
    name: 'Jack Sparrow',
    score: 44
  }
];

//accessing the key/value of an array object console.log(studentMathScore[2].name);

//1st Function
function averageScore(studentArray) {
    let averageScore;
    let sum = 0;
      for (const element of studentArray) {
        sum += element['score'];
      }
      averageScore=  Math.round( sum/STUDENT_MATHS_SCORE.length *100)/100;
      return averageScore;
      // you can sub student STUDENT_MATHS_SCORE.length with 11 because the array could be counted manually
     // if it contains many element use STUDENT_MATHS_SCORE.length

  //THE LOGIC BEHIND (....*100)'/100
      //the use of (....*100)/100 is a maths logic that allows you gain decimal precision
     // i.e rounded up or down to 1,2 or 3 d.p cause math,round rounds only to whole numbers . Take the number 34.46459
     /!* 1) *100 moves the decimal point two step forward(number of zeros on *x)  3446.459
     * 2) the round function rounds it to a whole number 3446
     * 3) /100 moves the decimal point it backward thus rounding it to 2d.p 34.46*!/


}
console.log("average score of the student =", averageScore(STUDENT_MATHS_SCORE));

//2nd Function
function highestScore(studentArray){
  let highestScore = STUDENT_MATHS_SCORE[1].score;
  for (const element of studentArray) {
    if (element['score']>highestScore) {
      highestScore = element['score'];
      console.log(`The highest score is ${element['score']} by ${element['name']}`);
    }
  }
}
highestScore(STUDENT_MATHS_SCORE);

//3rd Function
function studentWhoPassed(studentArray){
  for (const element of studentArray){
    if (element['score'] >= 50){
      console.log(element['name'], "passed");
    }

  }
}*/  
const STUDENT_MATHS_SCORE = [
  { name: 'IOM Future', score: 99 },
  { name: 'Helen Mark', score: 89 },
  { name: 'Kris Lee', score: 93 },
  { name: 'Peace Hall', score: 88 },
  { name: 'Mary Mark', score: 38 },
  { name: 'Kraven Gray', score: 63 },
  { name: 'Hope Zeal', score: 20 },
  { name: 'Ziglar Zick', score: 79 },
  { name: 'Neel Smoke', score: 30 },
  { name: 'Haven Hill', score: 58 },
  { name: 'Jack Sparrow', score: 44 }
];

// 1. Average Score Function
function getAverageScore(students) {
  let total = 0;
  for (let student of students) {
    total += student.score;
  }
  let average = total / students.length;
  return Math.round(average * 100) / 100;
}

// 2. Top Scorer Function
function getTopScorer(students) {
  let topStudent = students[0]; // Start with first student
  for (let student of students) {
    if (student.score > topStudent.score) {
      topStudent = student;
    }
  }
  return topStudent;
}

// 3. Students Who Passed
function getPassingStudents(students) {
  let passed = [];
  for (let student of students) {
    if (student.score >= 50) {
      passed.push(student.name);
    }
  }
  return passed;
}

// OUTPUT SECTION
console.log("Average Score:", getAverageScore(STUDENT_MATHS_SCORE));

const topScorer = getTopScorer(STUDENT_MATHS_SCORE);
console.log(`Top Scorer: ${topScorer.name} with score ${topScorer.score}`);

const passedStudents = getPassingStudents(STUDENT_MATHS_SCORE);
console.log("Students who passed:", passedStudents.join(", "));
