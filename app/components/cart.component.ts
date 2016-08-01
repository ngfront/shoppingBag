import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {Product} from '../models/product';
import {ProductImage} from './product-image.component';
import {ProductDesc} from './product-desc.component';
import {ProductSize} from './product-size.component';
import {ProductQty} from './product-qty.component';
import {ProductPrice} from './product-price.component';

import {sizeOptions} from './size-options.component';

import {QtyOptions} from './qty-options.component';
import {ColorOptions} from './color-options.component';

@Component({
	selector: 'cart',

	directives: [ProductImage, ProductDesc, ProductSize, ProductQty, ProductPrice, sizeOptions, QtyOptions, ColorOptions],
	templateUrl: 'app/components/cart.tmpl.html'
})
export class CartComponent{
	@Output() cartEdit: EventEmitter<any>;
	@Input() products: any;
	@Input() totalItems: number;

	productToEdit: any;
	modalStatus: boolean;
	updatedProduct: any;
	
	viewCheck: boolean = false;
	

	constructor() {
	
		this.cartEdit = new EventEmitter<any>();
		this.modalStatus = false;
		this.updatedProduct = {
			id: null
		}
	}
	


	initiateEditModal(product) {
		this.modalStatus = true;
		this.productToEdit = product;
		this.updatedProduct.id = this.productToEdit.id;
	}

	onQtyChange(newQty) {
		this.updatedProduct.quantity = newQty;
	}
	onSizeChange(newSize) {
		this.updatedProduct.selected_size = newSize;
	}
	onColorChange(newColor) {
		this.updatedProduct.selected_color = newColor;
	}

	applyChanges(updatedProduct) {
		console.log(this.products);
		updatedProduct = {
			id: this.productToEdit.id,
			selected_color: updatedProduct.selected_color || this.productToEdit.selected_color,
			selected_size : updatedProduct.selected_size || this.productToEdit.selected_size,
			quantity : updatedProduct.quantity || this.productToEdit.quantity
		}


		this.modalStatus = false;
	
		const productToEdit = this.products.find(product => product.id == updatedProduct.id);

		const newProduct = Object.assign({}, productToEdit, {
			quantity:updatedProduct.quantity,
			selected_size:updatedProduct.selected_size,
			selected_color:updatedProduct.selected_color
		});

		this.products = this.products.map(product => {

			if(product.id == newProduct.id) {
				
				return new Product({
					img_url: product.img_url,				
					p_id: product.id,
					p_name : product.name,
					p_variation : product.variation,
					p_style : product.style,
					p_selected_color : newProduct.selected_color,
					p_selected_size : newProduct.selected_size,
					p_available_options : product.available_options,
					p_quantity: newProduct.quantity,
					p_originalprice : product.org_price,
					p_price : product.price,
					c_currency : product.currency
				});
			}
				return product;
		});
		
		this.cartEdit.emit(this.products);
		
	}
}