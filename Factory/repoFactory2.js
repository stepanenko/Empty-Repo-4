
const repoFactory = function() {
  let repos = this;
  const repoList = [
    { name: 'task', source: './taskRepo'},
    { name: 'user', source: './userRepo'},
    { name: 'project', source: './projectRepo'}
  ];

  repoList.forEach(repo => {
    repos[repo.name] = require(repo.source)
  });
};

module.exports = new repoFactory;
