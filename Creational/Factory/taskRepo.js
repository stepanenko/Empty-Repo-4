
const repo = function () {
  
  const get = function (id) {
    console.log('Getting task', id);
    return { name: 'task from db ' };
  };

  const save = function (task) {
    console.log('Saving', task.name, 'to the db...');
  };

  return {
    get: get,
    save: save
  }
}

module.exports = repo();
