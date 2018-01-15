var keystone = require('keystone');
var Types = keystone.Field.Types;

var CustomerOffer = new keystone.List('CustomerOffer');

CustomerOffer.add({
	customer: { type: Types.Relationship, ref: 'Customer', initial: true },
	ad: { type: Types.Relationship, ref: 'Ad', initial: true },
	offer: { type: Types.Relationship, ref: 'Offer', initial: true },
});

/**
 * Registration
 */
CustomerOffer.defaultColumns = 'customer, ad, offer';
CustomerOffer.register();
