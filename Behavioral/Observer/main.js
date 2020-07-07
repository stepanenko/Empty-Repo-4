
const Task = require('./task');

const notificationService = function () {
  const message = 'Notiffying';
  this.update = function (task) {
    console.log(message, task.user, 'for task', task.name);
  }
};
const loggingService = function () {
  const message = 'Logging';
  this.update = function (task) {
    console.log(message, task.user, 'for task', task.name);
  }
};
function ObserverList() {
  this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
  return this.observerList.push(obj);
};
ObserverList.prototype.get = function(index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};

const ns = new notificationService();
const ls = new loggingService();
const task = new Task({ name: 'Observe the nature', user: 'Wyat' });
task.save();
