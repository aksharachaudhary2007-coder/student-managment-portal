const express=require('express');
const app=express();
const port=3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine","ejs");

const Student = require("./models/student.js");
app.use(express.static("public"));

const students = [
    new Student("Akshara", "CSE", 95),
    new Student("Rahul", "IT", 88),
    new Student("Priya", "ECE", 92)
];

app.get("/students",(req,res)=>{
    res.render("students.ejs",{students});
});

app.get("/students/new", (req, res) => {
    res.render("addStudent.ejs");
});
app.post("/students", (req, res) => {
    
    let name = req.body.name;
    let course = req.body.course;
    let marks = req.body.marks;

    /*console.log(name);
    console.log(course);
    console.log(marks);*/


    /*students.push({
        name: name,
        course: course,
        marks: marks
    });*/
    students.push(new Student(name, course, marks));

    //res.send("Student added successfully");
      res.redirect("/students");
});

 app.get("/",(req,res)=>{
    res.render("home.ejs");
 });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});