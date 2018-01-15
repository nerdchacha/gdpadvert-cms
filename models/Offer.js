var keystone = require('keystone');
var Types = keystone.Field.Types;

var Offer = new keystone.List('Offer');

Offer.add({
	name: { type: Types.Text, required: true, initial: true },
	minimumNumberOfAdsToAvailDiscount: { type: Types.Number },
	minimumAmountToAvailDiscount: { type: Types.Number },
	discountOnlyOnGroup: { type: Types.Boolean },
	groupSize: { type: Types.Number },
	discountPercent: { type: Types.Number },
});

/**
 * Registration
 */
Offer.defaultColumns = 'name, discountPercent, minimumNumberOfAdsToAvailDiscount discountOnlyOnGroup';
Offer.register();
