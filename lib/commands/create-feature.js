'use strict';

var path = require('path');
var chalk           = require('chalk');
module.exports = {
  name: 'feature:new',
  description: 'create a feature with specified name, note that the name is a single camelCased or dashed string',
  works: 'insideProject',

  run: function(commandOptions, rawArgs) {

    this.ui.writeLine(chalk.green('[commands:create-feature]', commandOptions, rawArgs));

    var CreateTask = require('../tasks/create-feature');
    var config = require('../utils/config')({ project: this.project });
    var createTask = new CreateTask({
      ui: this.ui,
      project: this.project,
      config: config
    });

    return createTask.run();
  }
};