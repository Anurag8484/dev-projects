
//  TODO: Can you create backend with standard folder structure like: week-4/hard ???
const express = require('express');
const { User, Admin, Course } = require("./db")
const jwt = require('jsonwebtoken');
const  mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const bcrypt = require("bcrypt");
const { z } = require('zod');
app.use(express.json());


const secret = process.env.JWT_SECRERT;  // This should be in an environment variable in a real application
const port = process.env.PORT;

// Connect to DB:

async function connectToDB(){
    try {
        await mongoose.connect(
          "mongodb+srv://anurag:8484@cluster0.u7mqesb.mongodb.net/Coursify"
        );
    } catch (error) {
            console.error(`Error connecting to DB: ${error}`);
    }
}

connectToDB();

const authMiddleware = (req, res, next) => {
//  authMiddleware logic here 
    const token = req.headers.token;
    const decodedData = jwt.verify(token,secret);

    if (decodedData){
        req.id = decodedData.id;
        next();
    }else{
        res.status(403).json({
            error: "Incorrect Credentials!"
        });
    };
};


// Admin routes
app.post('/admin/signup',async function(req, res){
    // logic to sign up admin
    const reqBody = z.object({
        email: z.string().min(3).max(20).email(),
        name: z.string().min(3).max(20),
        password: z.string().min(3).max(20)
    });

    const SafeData = reqBody.safeParse(req.body);

    if(!SafeData){
        res.json({
            error:SafeData.error.issues[0].message
        });
        return;
    }

    const email = req.body.email;
    const password = req.body.password;
    const name  = req.body.name;

    const hashedPassword = await bcrypt.hash(password,3);
    
    try {
        await User.create({
            email:email,
            password:password,
            name:name
        });
    } catch (error) {
        res.json({
            error:`Error adding to database: ${error.errorResponse.errmsg}`
        });
        return;
    }

    res.json({
        message:"You are signed up !!"
    });

});

app.post('/admin/login', async (req, res) => {
    // logic to log in admin

    const email = req.body.email;
    const password  = req.body.password;
    const name = req.body.name;

    let admin;
    let passwordMatch;

    try {
        admin = await Admin.findOne()
    }catch (error){

    }
});

app.post('/admin/courses', (req, res) => {
    // logic to create a course
});

app.put('/admin/courses/:courseId', (req, res) => {
    // logic to edit a course
});

app.get('/admin/courses', (req, res) => {
    // logic to get all courses
});

// User routes
app.post('/users/signup', (req, res) => {
    // logic to sign up user
});

app.post('/users/login', (req, res) => {
    // logic to log in user
});

app.get('/users/courses', (req, res) => {
    // logic to list all courses
});

app.post('/users/courses/:courseId', (req, res) => {
    // logic to purchase a course
});

app.get('/users/purchasedCourses', (req, res) => {
    // logic to view purchased courses
});

app.listen(port, () => {
    console.log('Server is listening on port 3000');
});