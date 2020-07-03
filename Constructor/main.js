
const Task = require('./task_proto');
const TaskClass = require('./task_class');

let task1 = new Task('Run');
let task2 = new Task('Shopping');

let task3 = new TaskClass('Work');
let task4 = new TaskClass('Cleaning');

task1.complete();
task2.save();

task3.complete();
task4.save();
