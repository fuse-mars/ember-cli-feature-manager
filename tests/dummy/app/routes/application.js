import Ember from 'ember';

import features from 'ember-cli-feature-manager/public/features';

export default Ember.Route.extend({
	beforeModel: function() {


	},
	model: function() {
		// console.log('[application-route: setupController] ', this.features.isEnabled('search'), this.features.get('search'));

	},
	setupController: function() {
		// features.disable('search');
		// console.log('[application-route: setupController] ', features.isEnabled('search'), this.features.get('search'));

		// this.features.enable('search');
		console.log('[application-route: setupController] ', this.features.get('search'));


	}
});