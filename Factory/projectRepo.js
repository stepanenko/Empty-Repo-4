
const project = function () {
  
  const get = function (id) {
    console.log('Getting project', id);
    return { name: 'My Fact Project' };
  };

  const save = function (project) {
    console.log('Saving', project.name, 'to the db...');
  };

  return {
    get: get,
    save: save
  }
}

module.exports = project();
