import { Component, Input } from '@angular/core';

@Component({
	selector: 'product-size',
	template: `
		<div class="product_size">{{size}}</div>
	`
})
export class ProductSize{
	@Input() size: string;
}