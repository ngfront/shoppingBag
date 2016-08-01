import {Component, OnInit, Input} from '@angular/core';


@Component({
	selector: 'billing-info',
	template: `

		<div class="contactBlock">
	<ul>
		<li class="bold">Need Help<br/> or have Questions</li>
		<li>Call Customer Care Service at:<br/>1-800-555-5555</li>
		<li><a href="#">Chat with one of our Advisors</a></li>
		<li><a href="#">See Return and Exchange Policy</a></li>
	</ul>
	

</div>


		<div class="billingBlock">
	<ul>
		<li class="promoBlock">
			<p>Enter Promotion Code<br/> Or Gift Card</p>
			<input type="text" class="pro_code" />
			<button class="apply">Apply</button>
		</li>

		<li>
			<label>Subtotal</label>
			<div class="value"><span class="currency">$</span>{{productSub}}</div>
		</li>

			<li>
			<label>Promotion Code JF10 Applied</label>
			<div class="value"><span class="metaSymbol">-</span><span class="currency">$</span>{{discount}}</div>
		</li>
		
		<li class="borderMe">
			<label>
				<span class="headText">Estimated Shipping</span>
				<span class="tagline">You Qualify for free Shipping<br/> because your order is over $50</span>
			</label>
			<div class="value">Free</div>
		</li>
		
		<li>
			<label>
				<span class="headText">Estimated Total</span>
				<span class="tagline">Tax will be applied during checkout</span>
			</label>
			<div class="value"><span class="currency">$</span>{{productSub - discount/100}}</div>
		</li>
	</ul>

</div>
	`

})
export class BillingInfo implements OnInit {
	@Input() productSub: number;
	@Input() discount: number;
	
	constructor() {

	}

	ngOnInit() {
	
	}

}