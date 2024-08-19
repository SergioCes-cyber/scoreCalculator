// LIST OF ARRAYS

let studentsScore = [16, 20, 75, 55, 70, 99, 88, 75, 40, 78];
console.log(studentsScore);
studentsScore.length;

console.log("Please see below the list of grades");

// 1 HE APP BELOW PRINTS ON THE CONSOLE HOW MANY STUDENTS PASSED THE TEST AND HOW MANY DIDN'T WITH THE SCORE NEXT TO IT

for (let i = 0; i <= studentsScore.length; i++) {
  if (studentsScore[i] >= 60)
    console.log(`Student number ${i} passed with a ${studentsScore[i]}`);
  else if (studentsScore[i] <= 60) {
    console.log(`Student number ${i} didn't pass with a ${studentsScore[i]}`);
  }
}

// 3, 4 & 5 THE APP BELOW PRINTS ON THE CONSOLE THE AVERAGE OF ALL THE  SCORES + PLUS RATES THE TEACHER PERFORMANCE

console.log(
  "Please see below the rate of every student plus if it's below of above the average"
);

function findAverage() {
  let averege = 0;
  for (let i = 0; i < studentsScore.length; i++) {
    let currentNum = studentsScore[i];
    // const element = studentsScore[i];
    averege += currentNum;
  }
  averege = averege / studentsScore.length;
  return averege;
}

let average = findAverage(studentsScore);
console.log(`The average of all the scores is: ${findAverage(average)}`);

if (average >= 60) {
  console.log(`Congrats you are a great teacher!!`);
} else {
  console.log(`Please check yourself`);
}

for (let i = 0; i <= studentsScore.length; i++) {
  if (studentsScore[i] >= 60)
    console.log(
      `Student number ${i} passed with a ${studentsScore[i]} he/she has a calification over the average`
    );
  else if (studentsScore[i] <= 59) {
    console.log(
      `Student number ${i} didn't pass with a ${studentsScore[i]} he/she has a calification below the average`
    );
  }
}

//  6 THE APP BELOW PRINTS THE SCORES ASCENDING AND DESCENGING

console.log("Please see below the list rates ascening and descending ");

studentsScore.sort();
console.log(studentsScore);
console.log(studentsScore.reverse());
