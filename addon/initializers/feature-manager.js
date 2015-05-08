import Ember from 'ember';
import Features from 'ember-cli-feature-manager/features';

/**
 * features are loaded from either the APP (this is usually ENV.APP) object of configuration file (config/environment.js).
 * ember-cli-feature-manager addon looks for attribute spcified by APP.featureManagerFixturesName,
 * which defaults to FEATURES.
 */
var featuresWrapper = {

  application: null,
  initialize: null,
  getFMClass: function() {
    var application = this.application;
    return Features.extend({

      init: function() {
        this._super.apply(this, arguments);

        var fixtures = application.featureManagerFixturesName || 'FEATURES';

        // TODO make sure service and fixtures are of different name

        console.log('[addon:initialize:util object - features]', application, application[fixtures]);

        // 
        if (application && !Ember.isNone(application[fixtures]) &&
          Ember.isArray(application[fixtures])) {
          this.setup(application[fixtures]);

        } else {

          //TODO print userfull info about missing/undefined variables
          console.log('[addon:initialize:util object - features problems here]', application);

          this.setup([]);
        }
      }

    });

  }
};

var featuresObject = Features.create({});
function initialize(container, application) {
  // application.inject('route', 'foo', 'service:foo');
  featuresWrapper.application = application;

  var serviceName = application.featureFlagsService || 'features';
  application.register('features:manager', featuresWrapper.getFMClass());
  application.inject('route', serviceName, 'features:manager');
  application.inject('controller', serviceName, 'features:manager');
  application.inject('component', serviceName, 'features:manager');
  application.inject('features:manager', 'application', 'application:main');

  featuresObject = featuresWrapper.getFMClass().create({});

}

export default {
  name: 'feature-manager',
  initialize: initialize
};

export {
  initialize,
  featuresObject
};