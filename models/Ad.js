var keystone = require('keystone');
var Types = keystone.Field.Types;

var Ad = new keystone.List('Ad');

Ad.add({
	name: { type: Types.Text, required: true, index: true },
	cost: { type: Types.Number, default: 0, index: true },
});

/**
 * Registration
 */
Ad.defaultColumns = 'name, cost';
Ad.register();
