
const task = {
  title: 'Buy Milk',
  description: 'go to shop and buy a milk'
};

Object.defineProperty(task, 'toString', {
  value: function() {
    return this.title + ' ' + this.description;
  },
  writable: false,
  configurable: false,
  enumerable: false // if omitted or set to false won't be displayed or iterated over
});

const urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
  value: function() {
    return this.title + ' is urgent';
  },
  writable: false,
  configurable: false,
  enumerable: false
});

console.log(urgentTask.toString()); // Buy Milk is urgent