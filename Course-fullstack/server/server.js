
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
const cors = require('cors')
app.use(cors());
const axios = require('axios')


const secret = process.env.JWT_SECRERT;  // This should be in an environment variable in a real application
const port = process.env.PORT;

// Connect to DB:
async function connectToDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
            console.error(`Error connecting to DB: ${error}`);
    }
}

connectToDB();

const adminAuth = async(req, res, next) => {
//  authMiddleware logic here 
    const token = req.headers.authorization;
    if (!token){
        res.json({
            error:"Please provied authorization token in the header."
        });
        return;
    }
    const decodedData = jwt.verify(token,secret);
    const user = await Admin.findById(decodedData.id);
    console.log(user);
    if (decodedData && user.role === 'admin'){
        req.id = decodedData.id;
        req.role = user.role
        next();
    }else{
        res.status(403).json({
            error: "Only Admins are allowed access."
        });
    };
};
const userAuth = async(req, res, next) => {
//  authMiddleware logic here 
    const token = req.headers.authorization;
    if (!token) {
      res.json({
        error: "Please provied authorization token in the header.",
      });
      return;
    }
    const decodedData = jwt.verify(token,secret);
    const user = await User.findById(decodedData.id);

    if (decodedData && user.role === 'user'){
        req.id = decodedData.id;
        req.role = user.role;
        next();
    }else{
        res.status(403).json({
            error: "Please login as User!"
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
        await Admin.create({
            email:email,
            password:hashedPassword,
            name:name
        });
    } catch (error) {
        res.json({
            error:`Error adding to database: ${error.errorResponse.errmsg}`
        });
        return;
    }

    res.json({
        message:"Admin signed up !!"
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
        admin = await Admin.findOne({
            email: email
        });

        passwordMatch =  bcrypt.compare(password,admin.password);
    }catch (error){
        console.error(`Error finding in DB: ${error}`);
    }

    if (passwordMatch){
        const token = jwt.sign({
            id: admin._id.toString()
        }, secret);
        res.json({
            message:"Admin Loged IN",
            token: token
        })
    }else{
        res.status(403).json({
            error: "Incorrect Credentials."
        });
    }
});


app.post('/admin/courses', adminAuth, async(req, res) => {
    // logic to create a course
    const id = req.id;
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    try {
        let courseCount = await Course.countDocuments();
        console.log(courseCount)
        await Course.create({
            title: title,
            description: description,
            price: price,
            imageLink: imageLink,
            courseId: courseCount + 1
        })
        res.json({
            message:`Course added successfully!`
        });
    } catch (error) {
            console.error(`Error adding course to DB: ${error}`);
            res.status(500).json({
                error: `Failed to add course to DataBase`
            })
            return;
    }
});


app.put('/admin/courses/:courseId',adminAuth, async(req, res) => {
    // logic to edit a course
    console.log("Yaha to aagya")
    const id = req.id;
    const courseId = parseInt(req.params.courseId)
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const published = req.body.published;

    try {
        const updatedCourse = await Course.findOneAndUpdate(
            {courseId: courseId},
            {
                title: title,
                description: description,
                price: price,
                imageLink: imageLink,
                published: published
            },
            {new: true}
        );
        await updatedCourse.save();
        res.json({
            message:"Course edited!"
        });
    } catch (error) {
            console.error(`Error editing course to DB: ${error}`);
            res.status(500).json({
                error: `Failed to edit course to DataBase`
            })
            return;
        }
});

app.get('/admin/courses', adminAuth, async(req, res) => {
    // logic to get all courses
    try {
        const courses = await Course.find();
        if(courses.length == 0){
            res.json({
                message:"At present, there are 0 courses."
            });
            return;
        }
        res.json({
            courses: courses
        })            
    } catch (error) {
        console.error(`Error fetching courses from DB: ${error}`)
        res.json({
          message: `Error fetching courses from DB: ${error}`
        });
    }

});

// User routes
app.post('/users/signup', async(req, res) => {
    // logic to sign up user
    const reqBody = z.object({
        email: z.string().min(3).max(20).email(),
        password: z.string().min(3).max(20),
        name: z.string().min(3).max(20)
    });
    const safeParse = reqBody.safeParse(req.body);

    if (!safeParse){
        res.json({
            error: safeParse.error.issues[0].message
        });
    }

  

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    
    const hashedPassword = await bcrypt.hash(password,3);

    try {
      await User.create({
        email: email,
        password: hashedPassword,
        name: name,
      });
      res.json({
        message: `User Signed Up!!`,
      });
    } catch (err) {
      res.json({
        db_error: err.errorResponse.errmsg,
        error: `Error adding the user in the DB ${err}!`,
      });
      return;
    }
});


app.post('/users/login', async(req, res) => {
  // logic to log in user
  const email = req.headers.email;
  console.log(email)
  const password = req.headers.password;
  console.log(password)

  let user;
  let passwordMatch;
  

  try {
    user = await User.findOne({
      email: email,
    });

    passwordMatch = bcrypt.compare(password, user.password);
  } catch (error) {
    res.json({
      error: `Error finding User in the DB: ${error}`,
    });
    return;
  }

  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      secret
    );
    res.json({
      message: `User Loged In.`,
      token: token,
    });
    return;
  } else {
    res.json({
      error: "Incorrect Credentials!",
    });
    return;
  }
});

app.get('/users/courses',userAuth, async(req, res) => {
    // logic to list all courses
    try {
      const courses = await Course.find();
      if (courses.length == 0) {
        res.json({
          message: "At present, there are 0 courses.",
        });
        return;
      }
      res.json({
        courses: courses,
      });
    } catch (error) {
      console.error(`Error fetching courses from DB: ${error}`);
      res.json({
        message: `Error fetching courses from DB: ${error}`,
      });
    }
});

app.post('/users/courses/:courseId', userAuth, async(req, res) => {
    // logic to purchase a course
    const courseId = parseInt(req.params.courseId);
    const id = req.id;
    try{
        let user = await User.findById(id);
        let course = await Course.findOne({courseId:courseId});
        if(user){
            console.log(course)
            user.courses.push(course);
            await user.save();
            res.json({
                message: "Course added !"
            });
            return;
        }
    }catch (err){
        res.json({
            message:`${err}`
        });
        return;
    }
});

app.get('/users/purchasedCourses',userAuth, async(req, res) => {
    // logic to view purchased courses
    const id = req.id;
    try {
        const user = await User.findById(id).populate("courses");;
        res.json({
            purchasedCourses: user.courses
        });
    } catch (error) {
        res.json({
            error:`error`
        })
    }
});

app.listen(port, () => {
    console.log('Server is listening on port 3000');
});
