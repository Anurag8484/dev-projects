const fs = require("fs");
const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

const file = "./database/data.json";
let Uid;
let loggedIN = false;

app.get("/healthy", (req, res) => res.send("I am Healthy"));

app.post("/user/signup", (req, res) => {
  let data;
  const name = req.body.name;
  const password = req.body.password;
  fs.readFile(file, "utf-8", (err, jdata) => {
    if (err) {
      console.error(err);
      return;
    }

    try {
      data = JSON.parse(jdata);
    } catch (error) {
      console.error(error);
      return;
    }
    for (let i = 0; i < data.length; i++) {
      if (data.name === name) {
        return res.send("User Already Exists, Try Login");
      }
    }
    const newUser = {
      id: data.length + 1,
      name: name,
      password: password,
      todos: [],
    };

    data.push(newUser);
    fs.writeFile(file, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        console.error(err);
      } else {
        return res.send("User Registered!, You may login now.");
      }
    });
  });
});

app.post("/user/login", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  let data;
  fs.readFile(file, "utf-8", (err, jdata) => {
    if (err) {
      console.log(err);
      return;
    }
    try {
      data = JSON.parse(jdata);
    } catch (error) {
      return console.error(error);
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].name == name && data[i].password == password) {
        Uid = data[i].id;
        loggedIN = true;
        return res.send("User Loged in");
      }
    }
    return res.send("User not registered!");
  });
});

function isLoggedIN(req, res, next) {
  if (loggedIN) {
    next();
  } else {
    res.json({
      Error: "Not LoggedIN",
    });
  }
}

app.use(isLoggedIN);
//---------------------------------

app.get("/todos", (req, res) => {
  let data;
  fs.readFile(file, "utf-8", (err, jdata) => {
    if (err) {
      console.error(err);
      return;
    }
    try {
      data = JSON.parse(jdata);
    } catch (error) {
      console.error(err);
      return;
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === Uid) {
        return res.send({
          Tasks: data[i].todos,
        });
      }
    }
    return res.send("Critical Error!!!");
  });
});

app.post("/todos", (req, res) => {
  const task = req.body.task;
  let data;
  fs.readFile(file, "utf-8", (err, jdata) => {
    if (err) {
      console.error(err);
      return;
    }
    try {
      data = JSON.parse(jdata);
    } catch (error) {
      console.error(err);
      return;
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === Uid) {
        let item = {
          id: data[i].todos.length + 1,
          task: task,
        };
        data[i].todos.push(item);
        break;
      }
    }

    fs.writeFile(file, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        console.error(err);
        return;
      } else {
        return res.send("Task Added Successfully");
      }
    });
  });
});

app.get("/todos/:id", (req, res) => {
  const task_id = parseInt(req.params.id);
  let data;
  fs.readFile(file, "utf-8", (err, jdata) => {
    if (err) {
      console.error(err);
      return;
    }
    try {
      data = JSON.parse(jdata);
    } catch (error) {
      console.error(err);
      return;
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === Uid) {
        for (let j = 0; j < data[i].todos.length; j++) {
          if (data[i].todos[j].id === task_id) {
            return res.send({
              Task: data[i].todos[j].task,
            });
          }
        }
      }
    }

    return res.send(`No task found with id ${task_id}.`);
  });
});

app.put("/todos/:id", (req, res) => {
  const task_id = parseInt(req.params.id);
  const newTask = req.body.task;
  let data;
  fs.readFile(file, "utf-8", (err, jdata) => {
    if (err) {
      console.error(err);
      return;
    }
    try {
      data = JSON.parse(jdata);
    } catch (error) {
      console.error(err);
      return;
    }
    let taskFound = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === Uid) {
        for (let j = 0; j < data[i].todos.length; j++) {
          if (data[i].todos[j].id === task_id) {
            data[i].todos[j].task = newTask;
            taskFound = true;
            break;
          }
        }
      }
    }

    if (!taskFound) {
      return res.status(404).send(`No task found with id ${task_id}.`);
    }
    fs.writeFile(file, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        console.error(err);
        return;
      } else {
        return res.send("Task Edited Successfully");
      }
    });
  });
});

app.delete("/todos/:id", (req, res) => {
  const task_id = parseInt(req.params.id);
  let data;
  fs.readFile(file, "utf-8", (err, jdata) => {
    if (err) {
      console.error(err);
      return;
    }
    try {
      data = JSON.parse(jdata);
    } catch (error) {
      console.error(err);
      return;
    }
    let taskFound = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === Uid) {
        for (let j = 0; j < data[i].todos.length; j++) {
          if (data[i].todos[j].id === task_id) {
            data[i].todos.splice(j, 1);
            taskFound = true;
            break;
          }
        }
      }
    }
    if (!taskFound) {
      return res.status(404).send(`No task found with id ${task_id}.`);
    }
    fs.writeFile(file, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        console.error(err);
        return;
      } else {
        return res.send("Task Deleted Successfully");
      }
    });
  });
});

//  start writing your routes here

app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`)
);
