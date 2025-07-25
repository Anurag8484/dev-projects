const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

// Define mongoose schemas
const userSchema = new mongoose.Schema({
  // userSchema here
  email: { type: String, unique: true },
  password: { type: String },
  name: { type: String },
  role: { type: String, default: "user" },
  courses: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Course",
    default: [],
  },
});

const adminSchema = new mongoose.Schema({
  // adminSchema here
  email: { type: String, unique: true },
  password: { type: String },
  name: { type: String},
  role: { type: String, default: "admin" },
});

const courseSchema = new mongoose.Schema({
// courseSchema here
courseId: { type: Number, unique:true },
title: { type: String, unique: true },
description: { type: String },
price: { type: Number },
imageLink: { type: String },
published: { type: Boolean, default: false},

});
const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);
const Course = mongoose.model('Course', courseSchema);

module.exports={
    User: User,
    Admin: Admin,
    Course: Course
}