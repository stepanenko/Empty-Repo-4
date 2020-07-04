
const repoFactory = function() {

  this.getRepo = function(repoType) {
    if (repoType === 'task') {
      const taskRepo = require('./taskRepo');
      return taskRepo;
    }
    if (repoType === 'user') {
      const userRepo = require('./userRepo');
      return userRepo;
    }
    if (repoType === 'project') {
      const projectRepo = require('./projectRepo');
      return projectRepo;
    }
  }
};

module.exports = new repoFactory;
