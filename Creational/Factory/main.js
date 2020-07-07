
const Task = require('./task');
const taskRepo = require('./taskRepo');
const userRepo = require('./userRepo');
const projectRepo = require('./projectRepo');

let task = new Task(taskRepo.get(1));

const user = userRepo.get(1);
const project = projectRepo.get(1);

task.user = user;
task.project = project;


console.log(task);
task.save();



