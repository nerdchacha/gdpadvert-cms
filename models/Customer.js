var keystone = require('keystone');
var Types = keystone.Field.Types;

var Customer = new keystone.List('Customer');

Customer.add({
	name: { type: Types.Text, required: true, index: true },
});

/**
 * Registration
 */
Customer.defaultColumns = 'name';
Customer.register();
