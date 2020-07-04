
const taskHandler = require('./taskHandler');
const myrepo = require('./Repo');

myrepo.save('fromMain');
myrepo.save('fromMain');
taskHandler.save();
taskHandler.save();
taskHandler.save();