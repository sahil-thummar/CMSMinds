const express = require('express');
const app = express();

const { task1, task2, task3 } = require("./controllers/task");

const actualReading = task1(56287);
console.log("actualReading : ", actualReading);

task2();
task3();

module.exports = app;