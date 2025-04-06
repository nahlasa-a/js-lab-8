const student = {
    name: "Nahla Sayed Ahmad",
    age: 22,
    enrolled: true,
    studentId: "n01432466",
    program: "Computer Programming & Analysis",
    college: "Humber Polytechnic Institute", 
    courses: ["Algorithms", "Database Design", "Operating Systems", "Web Programming", "JavaScript"],
    
    displayInfo: function() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Enrolled: ${this.enrolled ? "Yes" : "No"}`);
        console.log(`Courses: ${this.courses.join(", ")}`);
    }
};

student.displayInfo();
console.log(`Student Name: ${student.name}`);
console.log(`Student Age: ${student.age}`);
student.displayInfo();

const studentJSON = JSON.stringify(student);
console.log("JSON String:", studentJSON);

const newStudent = JSON.parse(studentJSON);
console.log("New Student Object:", newStudent);

const { name, courses } = student;
console.log("Student Name:", name);
console.log("Courses:", courses);

const scores = [100, 97, 90, 100, 100];
const [score1, score2] = scores;
console.log("Score 1:", score1);
console.log("Score 2:", score2);

const clonedStudent = { ...student, graduationYear: 2027 };
console.log("Cloned Student with Graduation Year:" , clonedStudent);

const additionalCourses = ["Numeric Computing", "Advanced Front-End Programming", "Introduction to Asrt & Sciences", "Database Programming", "Object-Oriented Programming"];
const allCourses = [...student.courses, ...additionalCourses];
console.log("All Courses:", allCourses);
