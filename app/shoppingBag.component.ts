import {Component, OnInit} from '@angular/core';

import {shoppingCartService} from './services/fetch-cart.service';
import {Product} from './models/product';

import {CartComponent} from './components/cart.component';
import {BillingInfo} from './components/billing.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/reduce';

@Component({
	selector: 'shopping-bag',
	providers: [shoppingCartService],
	directives: [CartComponent, BillingInfo],
	template: `
		<div class="mobileHead">
			<h1>Your Shopping Bag</h1>
			<div class="count">{{totalItems}} Items</div>
		</div>
		
		<cart (cartEdit)="onCartEdit($event)" [totalItems]="totalItems" [products]="products"></cart>
		<billing-info [productSub]="subTotal" [discount]="discount"><billing-info>
	`
})
export class shoppingBagComponent implements OnInit {

	products: Array<Product>;
	subTotal: number;
	discount: number;
	numberOfProducts: number;
	totalItems: any;

	constructor(private cartService:shoppingCartService  ) {
		
	}

	ngOnInit() {
		this.cartService.fetchProducts()
				.subscribe(data => {
					this.products = data;
					this.totalItems = this.products.length;
					this.numberOfProducts = this.products.length;
					
					this.calculateDiscount(this.numberOfProducts);

					this.subTotal = this.products
						.map(product =>  product.price)
						.reduce((acc,curr) => acc+curr);
				});

		
		
	}

			calculateDiscount(noOfProducts) {
					if(noOfProducts == 3) {
			this.discount = 5;
		}
		else if(noOfProducts > 3 && noOfProducts < 10) {
			this.discount = 10;
		}
		else if(noOfProducts > 10) {
			this.discount = 25;
		}
		console.log(noOfProducts, this.discount);
				}


	onCartEdit(updatedProducts) {
		console.log(updatedProducts);
		this.subTotal = updatedProducts
						.map(product =>  product.price * product.quantity)
						.reduce((acc,curr) => acc+curr);

		const noOfProducts = updatedProducts
								.map(product =>  product.quantity)
								.reduce((acc,curr) => acc+curr);

		this.calculateDiscount(noOfProducts);
	}

}