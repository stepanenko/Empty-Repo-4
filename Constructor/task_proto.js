
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

module.exports = Task;
