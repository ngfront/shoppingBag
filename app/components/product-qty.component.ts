import { Component, Input } from '@angular/core';

@Component({
	selector: 'product-qty',
	template: `
		<input type="text" value="{{qty}}"  />
	`
})
export class ProductQty{
	@Input() qty: any;
}