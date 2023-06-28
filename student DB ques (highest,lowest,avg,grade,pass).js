const studentDetails = [
	{
		roll: "1",
		name: "Rohan Singh",
		maths: 86,
		science: 90,
		english: 75,
		computer: 85
	},
	{
		roll: "2",
		name: "Ritvik Patel",
		maths: 27,
		science: 30,
		english: 35,
		computer: 30
	},
	{
		roll: "3",
		name: "Neha Maurya",
		maths: 75,
		science: 69,
		english: 40,
		computer: 75
	},
	{
		roll: "4",
		name: "Mohit Verma",
		maths: 21,
		science: 31,
		english: 45,
		computer: 40
	},
	{
		roll: "5",
		name: "Karan Trivedi",
		maths: 70,
		science: 80,
		english: 35,
		computer: 60
	}
];
//cvbnjm
//fghjk
console.log("Student Name and Total Marks:");
studentDetails.forEach(student => {
  const { name, maths, science, english, computer } = student;
  const totalMarks = maths + science + english + computer;
  console.log(name, totalMarks);
});
//cdfgvbhjnk
//fvgbhjn//
let highestTotalMarks = -1;
let studentWithHighestMarks = "";
studentDetails.forEach(student => {
  const { name, maths, science, english, computer } = student;
  const totalMarks = maths + science + english + computer;
  if (totalMarks > highestTotalMarks) {
    highestTotalMarks = totalMarks;
    studentWithHighestMarks = name;
  }
});
console.log("Student with Highest Total Marks:", studentWithHighestMarks);
//cvbnm
//fghjk
let lowestTotalMarks = Infinity;
let studentWithLowestTotalMarks = "";
studentDetails.forEach(student => {
    const {name, maths, science, english, computer} = student;
    const totalMarks = maths + science + english + computer;
    if (lowestTotalMarks > totalMarks){
        lowestTotalMarks = totalMarks;
        studentWithLowestTotalMarks = name;
    }
});
console.log("student with lowest total marks:", studentWithLowestTotalMarks)
//esxdchvjhbkn
//cgfvhbjn
const computerMarks = studentDetails.map(student => student.computer);
const averageMarks = computerMarks.reduce((acc, curr) => acc + curr, 0) / computerMarks.length;
console.log("Average Marks in Computer Subject:", averageMarks);
//cvbnb
//vcbnm
console.log("names and Grades:");
studentDetails.forEach(student => {
  const { name, maths, science, english, computer } = student;
  const totalMarks = maths + science + english + computer;
  const percentage = (totalMarks/400)*100;
  let grade = "";
  if (percentage >= 75){
      grade = "A";
  }else if(percentage >= 60){
      grade = "B";
  }
  else if(percentage >= 35){
      grade = "C";
  }
  else{
      grade = "D";
  }
  console.log(name, grade);
});
//vgfbhjnk
//xrdctfvygbhuj
const passedStudents = studentDetails.filter(student => {
  const { maths, science, english, computer } = student;
  const totalMarks = maths + science + english + computer;
  return totalMarks > 140; 
});
const passedStudentNames = passedStudents.map(student => student.name);
console.log("Total number of Students Passed:", passedStudents.length);
console.log("Names of Students Passed:\n", passedStudentNames);






