'use strict';
var CoreObject      = require('core-object');

module.exports = CoreObject.extend({
  run: function(){

    var task = this;
    process.on('SIGINT', function() {
      task.ui.writeLine( '\nGracefully shutting down from SIGINT (Ctrl-C)' );
      process.exit( );

    });

    task.ui.writeLine('[tasks:create-features]', 'work in progress ...');
    return 0;

    //1. create config/feature-manager.js file if it does not exist
    //2. add a new entry inside the features array

  }
});