import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	flag: DS.attr('boolean'),
	implementations: DS.attr(),
	selected: DS.attr()
});