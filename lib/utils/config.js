'use strict';

var path = require('path');
var fs = require('fs');

function config(options) {
  var configFile = path.join(options.project.root, 'config', 'feature-manager.js');
  if (fs.existsSync(configFile)) {
    return require(configFile);
  } else {
    return defaultConfig();
  }
}

module.exports = config;

// addon defaults to no feature available
function defaultConfig() {
  return {
    features: [
      /* {
          name: 'api',
          flag: false,
          implementations: ['fixtures', 'mock-server']
        } */
    ]
  }
}