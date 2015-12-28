'use strict';

var Client = require('./lib/client.js');
var config = require('./settings.json');

Client.forge(config)
  .then(function created(client) {
    return client.getIssue('ED-288');
  })
  .then(function complete(issue) {
    console.log(JSON.stringify(issue, null, 2));
  });

/*client.listProjectsAsync()
  .then(function complete(projects) {
    console.log(projects);
  });

client.getProjectAsync('ED')
  .then(function complete(project) {
    console.log(project);
  });*/