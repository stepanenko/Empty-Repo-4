
const Task = require('./task');
const repoFactory = require('./repoFactory2');

let task = new Task(repoFactory.task.get(1));

const user = repoFactory.user.get(1);
const project = repoFactory.project.get(1);

task.user = user;
task.project = project;


console.log(task);
task.save();
