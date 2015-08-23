import Ember from 'ember';

import FeatureFactory from 'ember-cli-feature-manager/public/features';

export default Ember.Route.extend({
	beforeModel: function() {


	},
	model: function() {
		// console.log('[application-route: setupController] ', this.features.isEnabled('search'), this.features.get('search'));

	},
	setupController: function(controller /* , model */) {
    	this._super.apply(this, arguments);

		// features.disable('search');
		// console.log('[application-route: setupController] ', features.isEnabled('search'), this.features.get('search'));

		// this.features.enable('search');
		console.log('[application-route: setupController] ', controller.features.get('search'));
		var self = this;
	    setTimeout(function() {
	      console.log("start of promise function exec before", self.features, FeatureFactory.settings);

	      controller.features.disable("search");
	      self.features.disable("noLogin");

	      console.log("start of promise function exec after", FeatureFactory.isEnabled("noLogin"), self.features.get("noLogin"));

	      setTimeout(function() {

	        controller.features.enable("search");
	        controller.features.enable("noLogin");

	        console.log("start of promise function exec inner timer", FeatureFactory.isEnabled("search"), self.features.get("search"));

	      }, 1500);

	    }, 2500);



	}
});