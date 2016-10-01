import Ember from 'ember';

export default Ember.Controller.extend({

	inputIsValid: Ember.computed('input', function() {
		if ( /^.+@.+\..+$/.test(this.get('input')) ) {
			return 'has-success';
		}
	}),
	input: '',

	textAreaIsValid: Ember.computed('textArea', function() {
		if (this.get('textArea').length > 5 ) {
			return 'has-success';
		}
	}),
	textArea: '',

	isDisabled: Ember.computed('input', 'textArea', function() {
		if (
			this.get('textAreaIsValid') === 'has-success' && 
			this.get('inputIsValid') === 'has-success'
			) {
			return false;
		} else {
			return true;
		}
	}),

	actions: {
		sendMessage() {
			alert(`Your email: ${this.get("input")}. \n Message: ${this.get("textArea")}`);
			this.set('response', 'We got your message and we’ll get in touch soon');
			this.set('input', '');
			this.set('textArea', '');
		}
	}

});
