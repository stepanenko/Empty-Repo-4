
const Repo = function() {
  let called = 0;

  const save = function(task) {
    called++;
    console.log(task, 'saved', called, 'times');
  };

  return {
    save: save
  };
};

let repo = new Repo();

repo.save('Buy');
