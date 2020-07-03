
const Task = function(name) {
  this.name = name;
  this.completed = false;
}

Task.prototype = {
  complete() {
    console.log('Completing task:', this.name);
    this.completed = true;
  },
  save() {
    console.log('Saving task:', this.name);
  }
}

let task1 = new Task('Run');
let task2 = new Task('Shopping');

task1.complete();
task2.save();
