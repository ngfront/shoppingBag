import { Component, Input } from '@angular/core';

@Component({
	selector: 'product-image',
	template: `
		<div class="product-image"> <img src="app/images/{{image}}.jpg" /> </div>
	`
})
export class ProductImage{
	@Input() image: string;
	constructor() {
	}
}