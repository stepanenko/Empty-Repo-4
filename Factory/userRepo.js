
const user = function () {
  
  const get = function (id) {
    console.log('Getting user', id);
    return { name: 'Sergio' };
  };

  const save = function (user) {
    console.log('Saving', user.name, 'to the db...');
  };

  return {
    get: get,
    save: save
  }
}

module.exports = user();
