
const Task = require('./task');
const Repo = require('./taskRepository');

let task = new Task(Repo.get(1));

let task1 = new Task({ name: 'Run' });
let task2 = new Task({ name: 'Shop' });
let task3 = new Task({ name: 'Play' });

task.complete();
task1.complete();
task2.save();
task3.save();


