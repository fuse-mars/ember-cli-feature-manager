import Ember from 'ember';

var camelize = Ember.String.camelize;

var FeatureManager = Ember.Object.extend({

  init: function() {
    this._super.apply(this, arguments);
    FeatureManager._featureObjects = Ember.create(null);

    this.setUnknownProperty = function(key) {
      throw new Error("Please use enable/disable to set feature featureNames. You attempted to set " + key);
    };
  },

  setup: function(features) {
    var normalizedFeatures = Ember.create(null);
    var featureName;

    for (var index in features) {
      var feature = features[index];
      if (this.isProperObject(feature)) {

        featureName = feature.name;
        //for resource management reason - no need to store the name since it is used as a key
        //TODO discuss and make sure this is the right way to go
        // delete feature.name;

        if (!feature.hasOwnProperty('implentations')) { //TODO make sure implentations is of type array
          Ember.merge(feature, {
            implentations: []
          });
        }

        normalizedFeatures[this.normalizeString(featureName)] = Ember.Object.create(feature);

      }
    }
    FeatureManager._featureObjects = normalizedFeatures;
  },

  //private
  isProperObject: function(feature) {
    return feature.hasOwnProperty('name') && feature.hasOwnProperty('flag');
  },

  normalizeString: function(featureName) {
    return camelize(featureName);
  },

  //accessible in the project
  enable: function(featureName) {
    var normalizeName = this.normalizeString(featureName);
    if (!Ember.isNone(FeatureManager._featureObjects[normalizeName])) {

      FeatureManager._featureObjects[normalizeName].set('flag', true);
      this.notifyPropertyChange(normalizeName);
    }
  },

  //accessible in the project
  disable: function(featureName) {
    var normalizeName = this.normalizeString(featureName);
    if (!Ember.isNone(FeatureManager._featureObjects[normalizeName])) {

      FeatureManager._featureObjects[normalizeName].set('flag', false);
      this.notifyPropertyChange(normalizeName);
    }
  },

  //accessible in the project
  isEnabled: function(feature) {
    var isEnabled = this._featureIsEnabled(feature);
    if (this.logFeatureFlagMissEnabled() && !isEnabled) {
      this.logFeatureFlagMiss(feature);
    }
    return isEnabled;
  },

  _featureIsEnabled: function(feature) {
    var normalizeName = this.normalizeString(feature);
    return FeatureManager._featureObjects[normalizeName] && FeatureManager._featureObjects[normalizeName].get('flag');
  },

  logFeatureFlagMissEnabled: function() {
    return !!window.ENV && !!window.ENV.LOG_FEATURE_FLAG_MISS;
  },

  logFeatureFlagMiss: function(feature) {
    if (console && console.info) {
      console.info('Feature featureName off:', feature);
    }
  },

  unknownProperty: function(key) {

    return this.isEnabled(key);
  },

  implentations: function(){
    // TODO 
    /**
     * more design work is needed here
     */
  }

});

// create a shared object - you call '_featureObjects', a static variable
FeatureManager.reopenClass({
  _featureObjects: Ember.create(null)
});

export default FeatureManager;