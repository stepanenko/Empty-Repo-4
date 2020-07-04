
const repo = function() {
  let called = 0;

  const save = function(task) {
    called++;
    console.log(task, 'saved', called, 'times');
  };

  return {
    save: save
  };
};

module.exports = repo();
