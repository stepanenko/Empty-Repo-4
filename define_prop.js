
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

task.toString = 'hi'; // will be ignored
// Object.defineProperty(task, 'toString', { configurable: true }); // TypeError: Cannot redefine property: toString

console.log(task.toString());