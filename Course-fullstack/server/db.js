const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

// Define mongoose schemas
const userSchema = new mongoose.Schema({
  // userSchema here
  email: { type: String, unique: true },
  password: { type: String },
  name: { type: String },
  role: { type: String, default: 'user' }

});

const adminSchema = new mongoose.Schema({
  // adminSchema here
  email: { type: String, unique: true },
  password: { type: String },
  name: { type: String },
  role: { type: String, default: "admin" },
});

const courseSchema = new mongoose.Schema({
// courseSchema here
id: { type: Number, unique:true },
title: { type: String, unique: true },
description: { type: String },
price: { type: Number },
imageLink: { type: String },
published: { type: Boolean}

});


