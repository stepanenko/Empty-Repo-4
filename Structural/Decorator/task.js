
const Task = function (name) {
  this.name = name;
  this.completed = false;
}

Task.prototype.complete = function () {
  console.log('Completing task:', this.name);
  this.completed = true;
};

Task.prototype.save = function () {
  console.log('Saving task:', this.name);
};

const myTask = new Task('Legacy task');
myTask.complete();
myTask.save();

const urgentTask = new Task('Urgent task');
urgentTask.priority = 2;
urgentTask.notify = function() {
  console.log('Notifying important people');
};
urgentTask.save = function() {
  this.notify();
  Task.prototype.save.call(this);
}

urgentTask.complete();
urgentTask.save();

// module.exports = Task;
