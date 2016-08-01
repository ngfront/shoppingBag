import { Component, Input } from '@angular/core';

@Component({
	selector: 'product-price',
	template: `
		<div class="product_price">\${{price}}</div>
	`
})
export class ProductPrice{
	@Input() price: any;
}