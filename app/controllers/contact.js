import Ember from 'ember';

export default Ember.Controller.extend({

	inputIsValid: Ember.computed('input', function() {
		if ( /^.+@.+\..+$/.test(this.get('input')) ) {
			return 'has-success';
		}
	}),
	input: '',

	textAreaIsValid: 'has-error',
	textArea: '',

	isDisabled: 'true'

});
