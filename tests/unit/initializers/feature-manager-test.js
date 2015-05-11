import Ember from 'ember';
import { initialize, featuresObject } from 'ember-cli-feature-manager/initializers/feature-manager';
import { module, test } from 'qunit';

var container, application;

module('FeatureManagerInitializer', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      container = application.__container__;
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  assert.expect(1);

  initialize(container, application);

  // featuresObject is created after initialization
  assert.ok(!Ember.isNone(featuresObject));
});