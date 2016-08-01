import { Component, Input, EventEmitter, Output } from '@angular/core';
import {Product} from '../models/product';

@Component({
	selector: 'product-desc',
	template: `
		<div class="headline_area">
			<h2>{{product.name}}</h2>
			<div class="meta">
				<span class="style_no">Style#: {{product.style}}</span>
				<span class="color">Color: {{product.selected_color.name}}</span>
			</div>
		</div>

		<div class="action_area">
		<ul>
			<li (click)="toEdit(product)">Edit</li>
			<li>x Remove</li>
			<li>Save For Later</li>
		</ul>
		</div> 
	`
})
export class ProductDesc{
	@Input() product: any;
	@Output() edit: EventEmitter<Product>;

	constructor() {
		this.edit = new EventEmitter<Product>();
	}
	toEdit(product) {
		this.edit.emit(product);
	}
}